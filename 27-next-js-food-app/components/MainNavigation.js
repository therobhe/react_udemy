import Link from 'next/link'

export default function MainNavigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/community">Community</Link>
				</li>
				<li>
					<Link href="/meals">Meals</Link>
				</li>
			</ul>
		</nav>
	)
}
