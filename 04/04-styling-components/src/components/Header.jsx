import logo from '../assets/logo.png';

export default function Header() {
    const day = new Date().getDay()
    const isEven = (day % 2) === 0

  return (
    <header className={"flex flex-col items-center mt-8 mb-16"}>
      <img src={logo} alt="A canvas"  className={"mb-8 w-44 h-44 object-contain"}/>
      <h1 className={"h-4 font-semibold tracking-widest text-center uppercase"}
          style={{
          color: isEven ? "blue" : "red"
      }}>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
