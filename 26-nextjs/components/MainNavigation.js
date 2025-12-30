import Link from "next/link";

export const MainNavigation = () => {
    return (
        <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation;
