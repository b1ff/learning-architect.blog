import * as React from "react";
import { Helmet } from "react-helmet";

export const title =
    "Devloop: random notes on the development and architecture";
export const description =
    "Everything about software architecture that I am learning both at work and beyond.";
const defaultKeywords = "architecture,DevOps,software,personal experience";

interface Props {
    additionalKeywords?: string;
}

export class Heading extends React.Component<Props> {
    render() {
        return (
            <Helmet htmlAttributes={{ lang: "en" }}>
                <title>{title}</title>
                <meta name="title" content={title}/>
                <meta name="description" content={description}/>
                <meta
                    name="keywords"
                    content={this.props.additionalKeywords ?? defaultKeywords}
                />
                <meta
                    name="google-site-verification"
                    content="YKSqM3OOK7MMMO5Do3-ANPak1kGLqXC_NRowlubq0U0"
                />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-YESM42DS43"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-YESM42DS43');
                    `}
                </script>
            </Helmet>
        );
    }
}
