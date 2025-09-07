import React from "react";
import DefaultPageLayout from "./src/components/DefaultPageLayout";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import "./src/styles/global.css";
import "prismjs/themes/prism-twilight.css";

// Wrap all pages with ThemeProvider
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

// Wrap all MDX pages with DefaultPageLayout
export const wrapPageElement = ({ element, props }) => {
  // Check if this is an MDX page
  if (props.pageContext && props.pageContext.frontmatter) {
    return <DefaultPageLayout {...props}>{element}</DefaultPageLayout>;
  }
  return element;
};
