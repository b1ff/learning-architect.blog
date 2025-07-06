import React from "react"
import DefaultPageLayout from "./src/components/DefaultPageLayout"
import "./src/styles/global.css"
import "prismjs/themes/prism-twilight.css"

// Wrap all MDX pages with DefaultPageLayout (same as gatsby-browser.js)
export const wrapPageElement = ({ element, props }) => {
  // Check if this is an MDX page
  if (props.pageContext && props.pageContext.frontmatter) {
    return <DefaultPageLayout {...props}>{element}</DefaultPageLayout>
  }
  return element
}

// Add preload hints for critical CSS
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      key="critical-css"
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS to prevent FOUC */
          body { margin: 0; font-family: ui-sans-serif, system-ui, sans-serif; }
          .container { width: 100%; max-width: 80rem; margin: 0 auto; }
          .grid { display: grid; }
          .bg-white { background-color: white; }
          .text-gray-500 { color: rgb(107, 114, 128); }
          .text-gray-700 { color: rgb(55, 65, 81); }
          .text-yellow-600 { color: rgb(202, 138, 4); }
          .headline { font-size: 1.875rem; line-height: 2.25rem; color: rgb(17, 24, 39); }
          .secondary-h { font-size: 1.5rem; line-height: 2rem; color: rgb(202, 138, 4); }
          .sub-h { font-size: 1.25rem; line-height: 1.25rem; color: rgb(107, 114, 128); }
        `,
      }}
    />,
  ])
}