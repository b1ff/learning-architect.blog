# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a technical blog called "DevLoop Blog" hosted at https://devloop.blog. The blog focuses on software architecture, modern development practices, AI/LLM usage in development, DevOps, and technical design patterns.

## Tech Stack

- **Gatsby v5.14.5** - Static site generator
- **React v18.2.0** - UI framework
- **MDX v2.3.0** - Markdown with JSX for content authoring
- **TypeScript** - For component development (.tsx files)
- **Tailwind CSS v3.4.15** - Utility-first CSS framework
- **Sass** - CSS preprocessor
- **PrismJS** - Code syntax highlighting

## Development Commands

```bash
npm run develop  # Start development server at localhost:8000
npm run build    # Build production-ready static site
npm run serve    # Serve production build locally
npm run clean    # Clean Gatsby cache and public folders
```

## Content Structure

Blog posts are written in MDX format and stored in `/src/pages/`. Each article must include frontmatter with:

```mdx
---
slug: "your-article-slug"
date: "2024-12-10"
author: "Evgeniy Moroz"
keywords:
  - keyword1
  - keyword2
---
```

Article excerpts are defined using `{/* cut */}` JSX comments in the MDX content. The excerpt system works as follows:

- **Two `{/* cut */}` markers**: Content between the first and second `{/* cut */}` becomes the excerpt
- **One `{/* cut */}` marker**: Content before the first `{/* cut */}` becomes the excerpt
- **No markers**: Falls back to Gatsby's default excerpt

The excerpt is automatically converted from Markdown to HTML and displayed in the article summary section on the homepage.

## Architecture

### Key Components
- `src/components/WithSidebarLayout.tsx` - Main layout wrapper
- `src/components/DefaultPageLayout.tsx` - Layout for MDX pages
- `src/pages/index.tsx` - Homepage listing all blog posts

### Data Flow
- GraphQL queries fetch blog post data
- Static generation at build time
- RSS feed automatically generated at `/rss.xml`
- Sitemap generated at `/sitemap.xml`

### Styling
- Tailwind CSS v3 for utility classes with JIT mode enabled
- Global styles in `src/styles/global.css` (imported in gatsby-browser.js)
- Component styles use Tailwind utilities
- Code blocks styled with Prism twilight theme
- Custom CSS classes defined: `headline`, `secondary-h`, `sub-h`, `article`, `link-default`

## Creating New Blog Posts

1. Create a new `.mdx` file in `/src/pages/`
2. Add required frontmatter (slug, date, author, keywords)
3. Write content using Markdown and JSX components
4. Structure content with `{/* cut */}` markers for excerpts:
   ```mdx
   # Article Title
   {/* cut */}
   This is the excerpt content that will appear on the homepage.
   {/* cut */}
   Rest of the article content...
   ```
5. Run `npm run develop` to preview
6. Build with `npm run build` before deploying

## Important Configurations

- `gatsby-config.mjs` - Main Gatsby configuration (uses ESM syntax for MDX plugin compatibility)
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration for Tailwind processing
- `gatsby-browser.js` - Browser-specific imports (CSS and Prism theme)
- `gatsby-ssr.js` - Server-side rendering setup with critical CSS to prevent FOUC
- `gatsby-node.js` - Custom excerpt extraction logic for `{/* cut */}` tags
- Site metadata and RSS feed settings in gatsby-config.mjs

### MDX Configuration Notes
- Uses `remark-gfm@3.0.1` for GitHub Flavored Markdown support (tables, strikethrough, etc.)
- Do NOT use `remark-gfm@4.x` as it's incompatible with Gatsby 5's MDX v2
- Do NOT use `rehype-raw` plugin as it conflicts with MDX v2 processing
- Configuration uses ESM syntax (gatsby-config.mjs) for proper plugin imports

## Deployment

The site uses GitHub Actions for automated deployment:
- **Workflow**: `.github/workflows/build-deploy-site.yaml`
- **Node.js version**: 20.x LTS
- **Triggers**: Push to main branch, pull requests
- **Deployment**: Automatically deploys to GitHub Pages at devloop.blog
- **Build command**: `npm run build` (production optimized)

### GitHub Pages Setup Required:
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Ensure `GITHUB_TOKEN` has write permissions for Pages
