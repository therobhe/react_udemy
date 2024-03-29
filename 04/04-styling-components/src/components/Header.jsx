import logo from '../assets/logo.png';

export default function Header() {
    const day = new Date().getDay()
    const isEven = (day % 2) === 0

  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 style={{
          color: isEven ? "blue" : "red"
      }}>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
