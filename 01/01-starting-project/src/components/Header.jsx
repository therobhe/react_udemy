import reactImg from "../assets/react-core-concepts.png";


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    const imgAlt = "Stylized atom"

    return (
        <header>
            <img src={reactImg} alt={imgAlt} />
            <h1>React Essentials</h1>
            <p>
                {description} Fundamental React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}

export default Header;