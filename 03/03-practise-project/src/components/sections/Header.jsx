import calculatorLogo from "../../assets/investment-calculator-logo.png"

export default function Header() {
    return (
        <header id={"header"}>
            <h1>React Investment Calculator</h1>
            <img src={calculatorLogo} alt="React Investment Calculator Logo"/>
        </header>
    )
}