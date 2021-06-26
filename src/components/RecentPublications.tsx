import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export function RecentPublications() {
	const data = useStaticQuery(graphql`
	 query recentsQuery {
		 allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
		 ) {
		  nodes {
			 headings(depth: h1) {
				value
			 }
			 slug
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
		<h3 className={'sub-h'}>Последние публикации</h3>
		<ul>
			<li><hr className="mb-3 mt-3"/></li>
			{posts.map(post => {
				return (
					<li>
						{post.frontmatter.date} - <a className={'link-default'} href={`/${post.slug}/`}>{post.headings[0].value}</a>
						<hr className="mb-3 mt-3"/>
					</li>
				)
			})}
			<li><a className={'link-default'} href="/">К списку тем</a></li>
		</ul>
	</nav>;
}
