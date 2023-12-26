function Heading(props) {
    const imgAlt = "Medal badge with a star";
    const headline = "Key React Concepts";
    const description = "Selected key React concepts you should know about";

    return (
        <header>
            <img src={props.imgsrc} alt={imgAlt} />
            <h1>{headline}</h1>
            <p>{description}</p>
        </header>
    );
}

export default Heading;