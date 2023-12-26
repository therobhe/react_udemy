/**
 * Section wrapper
 *
 * @param title
 * @param children
 * @param props - proxy props, so you dont have to explicitly destructure every prop & can assign them to the wrapper at once
 * @returns {JSX.Element}
 * @constructor
 */
function Section({ title, children, ...props }) {
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;