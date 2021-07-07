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
