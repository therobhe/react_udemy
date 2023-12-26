function Card(props) {
    return (
        <li className="concept">
            {props.children}
        </li>
    );
}

export default Card;