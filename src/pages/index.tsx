import * as React from "react"
import { WithSidebarLayout } from '../components/WithSidebarLayout';
import { graphql } from 'gatsby';
import { formatDate } from '../common/formatDate';

const IndexPage = (props) => {
	const posts: BlogsNode[] = props.data.allMdx.nodes;
	return (
		<WithSidebarLayout>
			<section className="hero">
				<title>Блог обучающегося архитектора</title>
				<h1 className="headline">
					Блог обучающегося архитектора
				</h1>
				<h3 className='sub-h'>
					Всё около программной архитектуры чему обучаюсь во время работы и не только.
				</h3>
			</section>
			<section className="">
				<ul>
					{posts.map(post => (
						<li className={'py-12'} key={post.slug}>
							<article>
								<h2 className='secondary-h'>
									<a href={`./${post.slug}/`}>
										{post.headings[0].value}
									</a>
								</h2>
								<div className='text-gray-500 py-2'>
									{formatDate(post.frontmatter.date)} / автор <span
									className='text-gray-700'>Евгений</span>
								</div>
								<p>
									{post.excerpt}
								</p>
								<div className='mt-4'>
									<a className="link-default"
										href={`./${post.slug}/`}>Читать дальше →</a>
								</div>
							</article>
						</li>))}
				</ul>
			</section>
		</WithSidebarLayout>
	)
}

export default IndexPage

interface BlogsNode {
	id: string;
	excerpt: string;
	headings: [{ value: string }];
	slug: string;
	frontmatter: {
		date: string;
		author: string;
	}
}

export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
	  nodes {
	  	 id
		 excerpt(pruneLength: 650)
		 headings(depth: h1) {
		 	value
		 }
		 slug
		 frontmatter {
			date
			title
			author
		 }
	  }
    }
  }
`
