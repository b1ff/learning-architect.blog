module.exports = {
	siteMetadata: {
		title: "Блог обучающегося архитектора",
		siteUrl: `https://learning-architect.blog`,
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "G-2K41KFP1B9",
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-sitemap",
			options: {
				output: '/sitemap'
			}
		},
		"gatsby-transformer-remark",
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				defaultLayouts: {
					default: require.resolve(`./src/components/DefaultPageLayout.tsx`),
				},
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		'gatsby-plugin-robots-txt',
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({query: {site, allMdx}}) => {
							return allMdx.nodes.map(node => {
								return Object.assign({}, node.frontmatter, {
									description: node.fields.articleCut,
									date: node.frontmatter.date,
									title: node.headings[0].value,
									url: `${site.siteMetadata.siteUrl}/${node.slug}/`,
									guid: `${site.siteMetadata.siteUrl}/${node.slug}/`
								})
							})
						},
						query: `
              {
                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  nodes {
				     id
					 headings(depth: h1) {
					    value
					 }
					 fields {
					    articleCut
					 }
					 slug
					 frontmatter {
						date
						title
						author
					 }
				  }
                }
              }
            `,
						output: "/rss.xml",
						title: "Learning Architect blog RSS Feed",
					},
				],
			},
		}
	],
};
