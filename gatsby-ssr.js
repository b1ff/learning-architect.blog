import React from "react";
import DefaultPageLayout from "./src/components/DefaultPageLayout";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import "./src/styles/global.css";
import "prismjs/themes/prism-twilight.css";

// Wrap all pages with ThemeProvider (same as gatsby-browser.js)
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

// Wrap all MDX pages with DefaultPageLayout (same as gatsby-browser.js)
export const wrapPageElement = ({ element, props }) => {
  // Check if this is an MDX page
  if (props.pageContext && props.pageContext.frontmatter) {
    return <DefaultPageLayout {...props}>{element}</DefaultPageLayout>;
  }
  return element;
};

// Add preload hints for critical CSS and set dark mode class for SSR
export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  // Set dark class on html element during SSR to match default theme
  setHtmlAttributes({ className: "dark" });

  setHeadComponents([
    <style
      key="critical-css"
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS to prevent FOUC */
          body { margin: 0; font-family: ui-sans-serif, system-ui, sans-serif; background-color: white; color: rgb(17, 24, 39); }
          .dark body { background-color: rgb(17, 24, 39); color: rgb(243, 244, 246); }
          .container { width: 100%; max-width: 80rem; margin: 0 auto; }
          .grid { display: grid; }
          .bg-white { background-color: white; }
          .dark .bg-white { background-color: rgb(31, 41, 55); }
          .text-gray-500 { color: rgb(107, 114, 128); }
          .dark .text-gray-500 { color: rgb(156, 163, 175); }
          .text-gray-700 { color: rgb(55, 65, 81); }
          .dark .text-gray-700 { color: rgb(209, 213, 219); }
          .text-yellow-600 { color: rgb(202, 138, 4); }
          .dark .text-yellow-600 { color: rgb(251, 191, 36); }
          .headline { font-size: 1.875rem; line-height: 2.25rem; color: rgb(17, 24, 39); }
          .dark .headline { color: white; }
          .secondary-h { font-size: 1.5rem; line-height: 2rem; color: rgb(202, 138, 4); }
          .dark .secondary-h { color: rgb(251, 191, 36); }
          .sub-h { font-size: 1.25rem; line-height: 1.25rem; color: rgb(107, 114, 128); }
          .dark .sub-h { color: rgb(156, 163, 175); }
        `,
      }}
    />,
  ]);
};
