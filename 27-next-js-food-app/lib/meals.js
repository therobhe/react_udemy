import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

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

/* function to save form data in a database and save the image to the filesystem */
export async function saveMeal(meal) {
	/* create unique slug and sanitize instructions */
	meal.slug = slugify(meal.title, {lower: true})
	meal.instructions = xss(meal.instructions)
	
	/* store image in public folder */
	const extension = meal.image.name.split('.').pop()
	const fileName = `${meal.slug}.${extension}`
	
	const stream = fs.createWriteStream(`public/images/${fileName}`)
	const bufferedImg = await meal.image.arrayBuffer()
	stream.write(Buffer.from(bufferedImg), (error) => {
		if(error) {
			throw new Error("Saving image failed")
		}
	})
	
	meal.image = `/images/${fileName}`
	
	db.prepare(`INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
								VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)`).run(meal)
}
