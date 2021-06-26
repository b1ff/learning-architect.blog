import * as React from 'react';
import { RecentPublications } from './RecentPublications';
import { About } from './About';

export function WithSidebarLayout({ children }) {
	return (
		<div>
			<div className='container bg-white max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-12 shadow-lg'>
					<div className="col-span-3 p-6">
						<About/>
						<RecentPublications/>
					</div>
					<main className="col-span-8 p-6">
						{children}
					</main>
				</div>
			</div>
		</div>
	)
}
