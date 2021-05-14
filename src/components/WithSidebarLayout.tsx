import * as React from 'react';
import { RecentPublications } from './RecentPublications';
import "./WithSidebarLayout.scss"

export function WithSidebarLayout({children}) {
	return (
		<div className='page-container'>
			<RecentPublications/>
			<main className="content-container">
				{children}
			</main>
		</div>
	)
}
