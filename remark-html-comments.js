// This plugin converts HTML comments to JSX comments for MDX v2 compatibility
module.exports = function remarkHtmlComments() {
  return (tree, file) => {
    const visit = require('unist-util-visit');
    
    visit(tree, 'html', (node) => {
      // Convert HTML comments to JSX comments
      if (node.value && node.value.startsWith('<!--') && node.value.endsWith('-->')) {
        const commentContent = node.value.slice(4, -3).trim();
        node.type = 'jsx';
        node.value = `{/* ${commentContent} */}`;
      }
    });
  };
};