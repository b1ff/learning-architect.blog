const remark = require('remark')
const remarkHTML = require('remark-html')

const EXCERPT_SEPARATOR = '<!-- excerpt -->'

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `Mdx`) {
		const [, rawExcerpt] = node.rawBody.split(EXCERPT_SEPARATOR)
		const snippet = rawExcerpt
			? remark().use(remarkHTML).processSync(rawExcerpt.trim()).toString()
			: ''

		createNodeField({
				name: `snippet`,
			node,
			value: snippet,
		})
	}
}
