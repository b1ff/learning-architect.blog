import * as React from "react"
import { WithSidebarLayout } from '../components/WithSidebarLayout';

const IndexPage = () => {
	return (
		<WithSidebarLayout>
			<section className="hero">
				<title>Блог обучающегося архитектора</title>
				<h1 className='text-3xl leading-9 pb-4 text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
					Блог обучающегося архитектора
				</h1>
				<h3 className='text-lg leading-7 text-gray-500'>
					Всё около программной архитектуры чему обучаюсь во время работы и не только.
				</h3>
			</section>
			<section className="">
				<ul>
					<li className='py-12'>
						<article>
							<h2 className='text-2xl leading-8 tracking-tight text-yellow-600 hover:text-gray-600'>
								<a href="./architect-team-discussions-part-1/">
									Подход к дискуссии в команде архитекторов
								</a>
							</h2>
							<div className='text-gray-500 py-2'>
								Май 5 / автор <span className='text-gray-700'>Евгений</span>
							</div>
							<p className='pt-2'>
								Думаю, многие из вас работали в команде и сталкивались с горячими дискуссиями при принятии
								того или иного решения. Обычно в команде есть человек, за которым финальное слово, например
								тех лид. Но иногда бывают разногласия достаточно тяжелые, потому что команда состоит из
								сеньйорных людей, где у каждого найдется много аргументов почему стоит прислушаться к его
								мнению.</p>
							<p className='pt-2'>Если архитектор на проекте один, то в его работе такая проблема менее выражена, потому что
								есть опция, в случае равнозначных решений, сохранить за собой последнее слово. Не всегда,
								свою опцию, но важно, что есть возможность прекратить спор, если таков имеется.
							</p>
							<div className='mt-4'>
								<a className="text-yellow-600 hover:text-gray-600" href="./architect-team-discussions-part-1/">Читать дальше →</a>
							</div>
						</article>
					</li>
				</ul>
			</section>
		</WithSidebarLayout>
	)
}

export default IndexPage
