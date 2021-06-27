import * as React from 'react';

export function About() {
	return (<section>
		<h3 className="sub-h">Про блог</h3>
		<p className="py-5">Записываю мысли о работе и не только. Попытка систематизировать информацию и записать, то что приходиться так или иначе повторять.</p>
		<h3 className="sub-h">Про меня</h3>
		<p className="pt-5">Привет, меня зовут Евгений.</p>
		<p className="py-5">
			Начиная с 2019 формально работаю архитектором. До сих пор разбираюсь что это значит и как с этим жить.
			<br />Написать можно сюда <a className="link-default" href={"mailto:admin@learning-architect.blog"}>admin@learning-architect.blog</a>
		</p>
	</section>);
}
