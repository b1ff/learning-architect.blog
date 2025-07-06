module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './gatsby-browser.js',
    './gatsby-ssr.js'
  ],
  safelist: [
    // Custom classes
    'headline',
    'secondary-h', 
    'sub-h',
    'article',
    'link-default',
    'recent-publications',
    // Layout classes
    'container',
    'mx-auto', 
    'px-4',
    'py-6',
    'py-16',
    'px-6',
    'pl-9',
    'pr-10',
    'grid',
    'grid-cols-1',
    'md:grid-cols-12',
    'col-span-3',
    'col-span-9',
    'bg-white',
    'shadow-lg',
    'border-r',
    'pt-12',
    'pt-5',
    'sticky',
    'top-0',
    // Typography classes
    'text-gray-500',
    'text-gray-700',
    'text-yellow-600',
    'hover:text-gray-600',
    'leading-5',
    'leading-8',
    'leading-9',
    'tracking-tight',
    // Spacing classes
    'mt-3',
    'mt-4',
    'mb-3',
    'p-6',
    // List classes
    'list-disc',
    'list-decimal',
    'ml-6'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}