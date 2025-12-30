import sql from 'better-sqlite3'

const db = sql("meals.db")

export async function getMeals() {
	// artifical delay for demonstrating loading & suspense
	await new Promise(resolve => setTimeout(resolve, 3000));
/*
artifical error in order to see the error boundary in /meals
throw new Error('Something went wrong');
*/
	return db.prepare('SELECT * FROM meals').all();
}

/* writing it with ? is a security mechanism against sqlInjection since sqlite protects these cases */
export async function getMeal(slug) {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
