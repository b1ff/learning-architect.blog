import * as React from 'react';
import { RecentPublications } from './RecentPublications';
import { About } from './About';

export function WithSidebarLayout({ children }) {
	return (
		<div>
			<div className='container bg-white max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
				<div className='grid grid-cols-1 py-16 md:grid-cols-6 shadow-lg'>
					<div className="col-span-1 p-6">
						<About/>
						<RecentPublications/>
					</div>
					<main className="col-span-5 p-6">
						{children}
					</main>
				</div>
			</div>
		</div>
	)
}
