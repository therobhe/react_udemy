import Link from 'next/link'

export default function MealsNavigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/meals/share">Share you Meal</Link>
				</li>
				<li>
					<Link href="/meals/slug-1">SlugRoute</Link>
				</li>
			</ul>
		</nav>
	)
}
