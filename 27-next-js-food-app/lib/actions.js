"use server"

import { saveMeal } from '@/lib/meals'
import {
	revalidatePath
} from 'next/dist/server/web/spec-extension/revalidate.js'
import { redirect } from 'next/navigation'

function isInvalidText(text) {
	return !text || text.trim() === ''
}

/*
* use server makes sure that the function is only executed on the server
* assigning this function to the forms action prop makes it automatically gather the formData
* which is then available as a arg
* */
export async function shareMeal(prevState, formData) {
	/* extract data from form */
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	}
	
	/* validate form data on server side */
	if(isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.image ||
		!meal.creator_email.includes('@')) {
/*		throw new Error('Please fill in all fields') // trigger error.js*/
		return {
			message: "Invalid input." // trigger a response that can be caught with server actions
		}
	}
	
	/* call save to db function */
	await saveMeal(meal)
	revalidatePath('/meals', 'layout') // throw away the cache for the meals route. Since layout wraps all subroutes, all caches in the route are invalidated
	redirect('/meals')
}
