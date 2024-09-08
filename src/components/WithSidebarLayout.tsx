import * as React from 'react';
import { RecentPublications } from './RecentPublications';
import { About } from './About';
import { Heading } from './Heading';

export function WithSidebarLayout({ children, additionalKeywords = undefined }) {
	return (
		<div className='container bg-white max-w-5xl mx-auto px-4 sm:px-6 xl:max-w-7xl xl:px-0 py-16'>
			<Heading additionalKeywords={additionalKeywords} />

			<div className='grid grid-cols-1 md:grid-cols-12 shadow-lg'>
				<div className="col-span-3 p-6 border-r">
					<div className="sticky top-0">
						<About/>
						<RecentPublications/>
					</div>
				</div>
				<main className="col-span-9 py-6 pl-9 pr-10">
					{children}
				</main>
			</div>
		</div>
	)
}
