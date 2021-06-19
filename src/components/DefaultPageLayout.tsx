/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { WithSidebarLayout } from './WithSidebarLayout';

const Layout = ({ children }) => {
	return (
		<WithSidebarLayout>
			<article className="article">
				{children}
			</article>
		</WithSidebarLayout>
	)
}

export default Layout
