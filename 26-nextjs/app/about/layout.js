const AboutNavigation = ({ children }) => {
    return (
        <>
            <nav>
                <ul>
                    <li>About Us</li>
                    <li>Social Media</li>
                    <li>Map</li>
                </ul>
            </nav>
            {children}
        </>
    )
}

export default AboutNavigation;