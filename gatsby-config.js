module.exports = {
	siteMetadata: {
		title: "Блог обучающегося архитектора",
		siteUrl: `https://learning-architect.blog`,
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
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
				extensions: [`.mdx`, `.md`],
				mdxOptions: {
					remarkPlugins: [
						require('remark-gfm'),
					],
					rehypePlugins: [],
				},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
						},
					},
				],
			}
		},
		`gatsby-remark-images`,
		"gatsby-plugin-sharp",
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
								const slug = node.internal.contentFilePath.replace(/^.*\/src\/pages\//, '').replace(/\.mdx?$/, '')
								const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
								return Object.assign({}, node.frontmatter, {
									description: node.fields ? node.fields.articleCut : node.excerpt,
									date: node.frontmatter.date,
									title: title,
									url: `${site.siteMetadata.siteUrl}/${slug}/`,
									guid: `${site.siteMetadata.siteUrl}/${slug}/`
								})
							})
						},
						query: `
              {
                allMdx(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  nodes {
				     id
				     excerpt
				     internal {
				       contentFilePath
				     }
					 fields {
					    articleCut
					 }
					 frontmatter {
						date
						author
						keywords
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
