import * as React from "react"
import { WithSidebarLayout } from '../components/WithSidebarLayout';
import { graphql } from 'gatsby';
import { formatDate } from '../common/formatDate';
import { description, title } from '../components/Heading';

const IndexPage = (props) => {
	const posts: BlogsNode[] = props.data.allMdx.nodes;
	return (
		<WithSidebarLayout>
			<section className="hero">
				<h1 className="headline">
					{title}
				</h1>
				<h3 className='sub-h'>
					{description}
				</h3>
			</section>
			<section className="">
				<ul>
					{posts.map(post => {
						const slug = post.internal.contentFilePath.replace(/^.*\/src\/pages\//, '').replace(/\.mdx?$/, '');
						return (
						<li className={'pt-12'} key={post.id}>
							<article className={'article'}>
								<h2 className='secondary-h'>
									<a href={`./${slug}/`}>
										{slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
									</a>
								</h2>
								<div className='text-gray-500 py-2'>
									{formatDate(post.frontmatter.date)} / author
									<span className='text-gray-700'> Eugene</span>
								</div>
								<div className="article-summary" dangerouslySetInnerHTML={{ __html: post.fields.articleCut }}/>
								<div className='mt-4'>
									<a className="link-default"
										href={`./${slug}/`}>Read full article →</a>
								</div>
							</article>
						</li>
						);
					})}
				</ul>
			</section>
		</WithSidebarLayout>
	)
}

export default IndexPage

interface BlogsNode {
	id: string;
	excerpt: string;
	internal: {
		contentFilePath: string;
	}
	fields: {
		articleCut: string;
	}
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
      sort: { frontmatter: { date: DESC } }
    ) {
	  nodes {
	  	 id
		 internal {
		   contentFilePath
		 }
		 fields {
		 	articleCut
		 }
		 frontmatter {
			date
			author
		 }
	  }
    }
  }
`
