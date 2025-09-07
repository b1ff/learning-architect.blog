import * as React from "react";
import { WithSidebarLayout } from "./WithSidebarLayout";
import Comments from "./Comments";

const Layout = (props) => {
  const children = props.children;
  return (
    <WithSidebarLayout
      additionalKeywords={props.pageContext.frontmatter.keywords}
    >
      <article className="article">{children}</article>
      <Comments />
    </WithSidebarLayout>
  );
};

export default Layout;
