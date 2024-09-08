import { remark } from 'remark';
import remarkHTML from 'remark-html';

const EXCERPT_SEPARATOR = '{/* cut */}';

export const onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `Mdx`) {
		const cutBeginning = node.body.indexOf(EXCERPT_SEPARATOR) + EXCERPT_SEPARATOR.length;
		const cutEnding = node.body.lastIndexOf(EXCERPT_SEPARATOR);
		if (cutEnding === cutBeginning) {
			throw new Error('Please put 2 {/* cut */} tags in the article. At the beginning and at the end.')
		}

		const rawExcerpt = node.body.substr(cutBeginning, cutEnding - cutBeginning)
		const articleCut = rawExcerpt
			? remark().use(remarkHTML).processSync(rawExcerpt.trim()).toString()
			: ''
		createNodeField({
			name: `articleCut`,
			node,
			value: articleCut,
		})
	}
}
