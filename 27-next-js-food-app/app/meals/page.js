import Link from 'next/link'
import { Suspense } from 'react'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

const Meals = async() => {
	// db connect & data fetch
	const meals = await getMeals();
	
	return (
		<MealsGrid meals={meals} />
	)
}

/* Special to RSC: they can be async in contrast to client side components */
export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>Delicious meals, created by <span className={classes.highlight}>by you</span></h1>
				<p>Choose your favourite recipe and cook it yourself.</p>
				<p className={classes.cta}>
					<Link href="/meals/share">
						Share your favourite recipe
					</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
					<Meals />
				</Suspense>
			</main>
		</>
	)
}
