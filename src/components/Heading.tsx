import * as React from 'react';
import { Helmet } from 'react-helmet';

export const title = 'From Novice to Architect: My Journey of Learning and Growth';
export const description = 'Everything about software architecture that I am learning both at work and beyond.';
const defaultKeywords = 'architecture,DevOps,software,personal experience'

interface Props {
	additionalKeywords?: string;
}

export class Heading extends React.Component<Props> {
	render() {
		return <Helmet htmlAttributes={{ lang: 'en' }}>
			<title>{title}</title>
			<meta name="title" content={title}/>
			<meta name="description" content={description}/>
			<meta name="keywords" content={this.props.additionalKeywords ?? defaultKeywords} />
			<meta name="google-site-verification" content="YKSqM3OOK7MMMO5Do3-ANPak1kGLqXC_NRowlubq0U0" />
		</Helmet>;
	}
}
