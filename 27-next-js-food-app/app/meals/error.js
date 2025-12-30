"use client"

export default function MealError({error}) {
	return (
		<main className="error">
			<h1>An error occured!</h1>
			<p>Failed to fetch Meal Data, please try again later.</p>
		</main>
	)
}
