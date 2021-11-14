import * as React from 'react';
import { Helmet } from 'react-helmet';

export const title = 'Блог обучающегося архитектора';
export const description = 'Всё около программной архитектуры чему обучаюсь во время работы и не только.';
const defaultKeywords = 'architecture,архитектура,программное обеспечение,DevOps,девопс,software'

interface Props {
	additionalKeywords?: string;
}

export class Heading extends React.Component<Props> {
	render() {
		return <Helmet htmlAttributes={{ lang: 'ru' }}>
			<title>{title}</title>
			<meta name="title" content={title}/>
			<meta name="description" content={description}/>
			<meta name="keywords" content={this.props.additionalKeywords ?? defaultKeywords} />
			<meta name="google-site-verification" content="YKSqM3OOK7MMMO5Do3-ANPak1kGLqXC_NRowlubq0U0" />
		</Helmet>;
	}
}
