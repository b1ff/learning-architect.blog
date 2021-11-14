import * as React from "react"
import { WithSidebarLayout } from './WithSidebarLayout';

const Layout = (props) => {
	const children = props.children;
	console.log(props.pageContext.frontmatter);
	return (
		<WithSidebarLayout additionalKeywords={props.pageContext.frontmatter.keywords}>
			<article className="article">
				{children}
			</article>
		</WithSidebarLayout>
	)
}

export default Layout
