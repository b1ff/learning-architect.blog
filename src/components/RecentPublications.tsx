import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { formatDate } from '../common/formatDate';

export function RecentPublications() {
	const data = useStaticQuery(graphql`
	 query recentsQuery {
		 allMdx(
			sort: { frontmatter: { date: DESC } }
		 ) {
		  nodes {
			 internal {
			   contentFilePath
			 }
			 frontmatter {
				date
				author
			 }
		  }
		 }
	  }
  `)
	const posts = data.allMdx.nodes;

	return <nav className={'recent-publications'}>
		<h3 className={'sub-h'}>Recent articles</h3>
		<ul>
			<li><hr className="mb-3 mt-3"/></li>
			<li>
				<a className={'link-default'} href="/">To the list of themes</a>
				<hr className="mb-3 mt-3"/>
			</li>

			{posts.map(post => {
				const slug = post.internal.contentFilePath.replace(/^.*\/src\/pages\//, '').replace(/\.mdx?$/, '');
				return (
					<li key={post.frontmatter.date}>
						<span className="text-gray-500">{formatDate(post.frontmatter.date)} - </span><a className={'link-default'} href={`/${slug}/`}>{slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</a>
						<hr className="mb-3 mt-3"/>
					</li>
				)
			})}
			<li><a className={'link-default'} href="/rss.xml">RSS</a></li>
		</ul>
	</nav>;
}
