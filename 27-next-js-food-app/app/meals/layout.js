import MealsNavigation from '@/components/meals/meals-navigation'

export default function Layout({ children }) {
	return (
		<main>
			<MealsNavigation />
			{children}
		</main>
	)
}
