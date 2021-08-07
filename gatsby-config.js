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
		"gatsby-plugin-sitemap", // todo it requires fine tuning, need to understand how to make it work
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
		'gatsby-plugin-robots-txt'
	],
};
