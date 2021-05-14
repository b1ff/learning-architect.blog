import * as React from "react"
import '../styles/normalize.scss';
import './index.scss';
import { WithSidebarLayout } from '../components/WithSidebarLayout';

const IndexPage = () => {
	return (
		<WithSidebarLayout>
			<section className="hero">
				<title>Блог обучающегося архитектора</title>
				<h1>
					Блог обучающегося архитектора
				</h1>
				<h2>
					Всё около архитектуры чему обучаюсь во время работы и не только.
				</h2>
			</section>
			<section className="pages-preview">
				<ul className="pages-list">
					<li>
						<div className="page-card">
							<h3>Подход к дискуссии в команде архитекторов</h3>
							<p>
								Думаю, многие из вас работали в команде и сталкивались с горячими дискуссиями при принятии
								того или иного решения. Обычно в команде есть человек, за которым финальное слово, например
								тех лид. Но иногда бывают разногласия достаточно тяжелые, потому что команда состоит из
								сеньйорных людей, где у каждого найдется много аргументов почему стоит прислушаться к его
								мнению.</p>
							<p>Если архитектор на проекте один, то в его работе такая проблема менее выражена, потому что
								есть опция, в случае равнозначных решений, сохранить за собой последнее слово. Не всегда,
								свою опцию, но важно, что есть возможность прекратить спор, если таков имеется.
							</p>
							<a href="/architect-team-discussions-part-1/">Читать дальше...</a>
						</div>
					</li>
				</ul>
			</section>
		</WithSidebarLayout>
	)
}

export default IndexPage
