import classes from './page.module.css'
import ImagePicker from '@/components/images/image-picker'

export default function ShareMealPage() {
	/*
	* use server makes sure that the function is only executed on the server
	* assigning this function to the forms action prop makes it automatically gather the formData
	* which is then available as a arg
	* */
	async function handleSubmit(formData) {
		"use server";
		
		const meal = {
			title: formData.get('title'),
			summary: formData.get('summary'),
			instructions: formData.get('instructions'),
			image: formData.get('image'),
			creator: formData.get('name'),
			creator_email: formData.get('email')
		}
		
		console.log(meal)
	}
	return (
		<>
			<header className={classes.header}>
				<h1>
					Share your <span className={classes.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form className={classes.form} action={handleSubmit}>
					<div className={classes.row}>
						<p>
							<label htmlFor="name">Your name</label>
							<input type="text" id="name" name="name" required />
						</p>
						<p>
							<label htmlFor="email">Your email</label>
							<input type="email" id="email" name="email" required />
						</p>
					</div>
					<p>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" required />
					</p>
					<p>
						<label htmlFor="summary">Short Summary</label>
						<input type="text" id="summary" name="summary" required />
					</p>
					<p>
						<label htmlFor="instructions">Instructions</label>
						<textarea
							id="instructions"
							name="instructions"
							rows="10"
							required
						></textarea>
					</p>
					<ImagePicker label="Upload an image" name="image" required />
					<p className={classes.actions}>
						<button type="submit">Share Meal</button>
					</p>
				</form>
			</main>
		</>
	);
}
