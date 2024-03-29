import * as React from 'react';

export function About() {
    return (<section>
        <h3 className="sub-h">About the blog</h3>
        <p className="py-5">I write my thoughts about work and other things. An attempt to systematize information and
            write down what I have to repeat one way or another.</p>
        <h3 className="sub-h">About me</h3>
        <p className="pt-5">Hi, my name is Eugene.</p>
        <p className="py-5">
            Formally, I have been working as an architect since 2019. I am still figuring out what it means and how to
            deal with it.
            <br/>You can write to me here <a className="link-default"
                                             href={"mailto:admin@learning-architect.blog"}>admin@learning-architect.blog</a>
        </p>
    </section>);
}
