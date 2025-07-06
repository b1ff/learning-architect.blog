module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.html',
    './gatsby-browser.js',
    './gatsby-ssr.js'
  ],
  safelist: [
    'headline',
    'secondary-h', 
    'sub-h',
    'article',
    'link-default',
    'recent-publications',
    // Add common Tailwind classes that might be purged
    'container',
    'mx-auto',
    'px-4',
    'py-6',
    'grid',
    'grid-cols-1',
    'md:grid-cols-12',
    'col-span-3',
    'col-span-9',
    'bg-white',
    'shadow-lg',
    'border-r',
    'pt-12',
    'text-gray-500',
    'text-gray-700',
    'text-yellow-600',
    'hover:text-gray-600'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}