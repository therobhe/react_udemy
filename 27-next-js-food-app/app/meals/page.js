import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

/* Special to RSC: they can be async in contrast to client side components */
export default async function MealsPage() {
	// db connect & data fetch
	const meals = await getMeals();
	
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
				<MealsGrid meals={meals} />
			</main>
		</>
	)
}
