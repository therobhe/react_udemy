import { getMeal } from '@/lib/meals'
import { notFound } from 'next/dist/client/components/not-found'
import Image from 'next/image'
import classes from './page.module.css'

/*
* dynamic meta: use this function for accessing params
* returns the metadata object
* */
export async function generateMetadata({ params }) {
	const meal = await getMeal(params.slug)
	
	if(!meal) {
		notFound()
	}
	
	return {
		title: meal.title,
		desscription: meal.summary
	}
}

export default async function SlugPage({ params }) {
	const { slug } = await params;
	const meal = await getMeal(slug) // slug is because this is the placeholder in the folder structure
	
	if(!meal) {
		notFound()
	}
	
	meal.instructions = meal.instructions.replace(/\n/g, '<br />')
	
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} alt={meal.title} fill></Image>
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
			</main>
		</>
	)
}
