const fs = require('fs')
const readingTime = require('reading-time')

const EXCERPT_SEPARATOR = '{/* cut */}'

// Simple markdown to HTML converter
function markdownToHtml(markdown) {
	return markdown
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
		.replace(/\*(.*?)\*/gim, '<em>$1</em>')
		.replace(/~~(.*?)~~/gim, '<del>$1</del>')
		.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
		.replace(/`(.*?)`/gim, '<code>$1</code>')
		.replace(/\n\n+/gim, '</p><p>')
		.replace(/^(.+)$/gim, '<p>$1</p>')
		.replace(/<p><\/p>/gim, '')
		.replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/gim, '$1')
		.replace(/<p>(<ul>.*<\/ul>)<\/p>/gims, '$1')
		.replace(/<p>(<ol>.*<\/ol>)<\/p>/gims, '$1');
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `Mdx`) {
		let articleCut = '';
		
		try {
			// Get the raw file content directly
			const filePath = node.fileAbsolutePath || node.internal.contentFilePath;
			if (filePath && fs.existsSync(filePath)) {
				const content = fs.readFileSync(filePath, 'utf-8');
				
				// Find the position of excerpt separators
				const firstCutIndex = content.indexOf(EXCERPT_SEPARATOR);
				const secondCutIndex = content.indexOf(EXCERPT_SEPARATOR, firstCutIndex + 1);
				
				if (firstCutIndex !== -1) {
					let excerptContent = '';
					
					if (secondCutIndex !== -1) {
						// Content between first and second cut
						excerptContent = content.substring(firstCutIndex + EXCERPT_SEPARATOR.length, secondCutIndex).trim();
					} else {
						// Content before first cut (fallback)
						excerptContent = content.substring(0, firstCutIndex).trim();
						// Remove frontmatter if present
						excerptContent = excerptContent.replace(/^---[\s\S]*?---\s*/m, '');
					}
					
					if (excerptContent) {
						// Convert to HTML
						articleCut = markdownToHtml(excerptContent);
					}
				} else {
					// Fallback to default excerpt if no separator found
					articleCut = node.excerpt || '';
				}
			} else {
				// Fallback to default excerpt
				articleCut = node.excerpt || '';
			}
		} catch (error) {
			console.warn('Error processing excerpt for', node.internal.contentFilePath, error);
			articleCut = node.excerpt || '';
		}
		
		createNodeField({
			name: `articleCut`,
			node,
			value: articleCut,
		})
		
		// Add reading time estimation
		try {
			const filePath = node.fileAbsolutePath || node.internal.contentFilePath;
			if (filePath && fs.existsSync(filePath)) {
				const content = fs.readFileSync(filePath, 'utf-8');
				// Remove frontmatter and calculate reading time
				const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\s*/m, '');
				const readingTimeStats = readingTime(contentWithoutFrontmatter);
				
				createNodeField({
					name: `timeToRead`,
					node,
					value: readingTimeStats.minutes,
				})
			}
		} catch (error) {
			console.warn('Error calculating reading time for', node.internal.contentFilePath, error);
			createNodeField({
				name: `timeToRead`,
				node,
				value: 1, // fallback to 1 minute
			})
		}
	}
}
