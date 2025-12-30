import classes from './loading.module.css'

/* This would be shown in place of the entire meals component until the async operation has finished */
export default function MealsLoading() {
	return (
		<p className={classes.loading}>Fetching meals...</p>
	)
}
