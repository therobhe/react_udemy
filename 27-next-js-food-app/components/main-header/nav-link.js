'use client'

/*
* We extracted this Link into an own component in order to prevent main-header.js to be a client side component
* now only the link is rendered on the client side and the rest of the main-header comes from the server side
*  */
import Link from 'next/link'
import classes from '@/components/main-header/nav-link.module.css'
import { usePathname } from 'next/navigation'

export default function NavLink({ children, href }) {
	const path = usePathname()
	
	return (
		<Link href={href} className={path.startsWith(href)
			? `${classes.link} ${classes.active}`
			: classes.link}>
			{children}
		</Link>
	)
}
