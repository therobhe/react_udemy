import MealsNavigation from '@/components/MealsNavigation'

export default function Layout({ children }) {
	return (
		<main>
			<MealsNavigation />
			{children}
		</main>
	)
}
