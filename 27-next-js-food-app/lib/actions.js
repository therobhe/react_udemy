"use server"

import { saveMeal } from '@/lib/meals'
import { redirect } from 'next/navigation'

/*
* use server makes sure that the function is only executed on the server
* assigning this function to the forms action prop makes it automatically gather the formData
* which is then available as a arg
* */
export async function shareMeal(formData) {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	}
	await saveMeal(meal)
	redirect('/meals')
}
