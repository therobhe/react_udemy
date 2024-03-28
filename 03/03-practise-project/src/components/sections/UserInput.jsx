import InputGroup from "../ui/InputGroup.jsx"
export default function UserInput( {onInput} ) {
    return (
        <div id={"user-input"} className={"input-group"}>
            <div className={"col"}>
                <InputGroup labelText={"Initial Investment"} valueKey={"initialInvestment"} onInput={onInput} />
                <InputGroup labelText={"Annual Investment"} valueKey={"annualInvestment"} onInput={onInput} />
            </div>
            <div className={"col"}>
                <InputGroup labelText={"Expected Return"} valueKey={"expectedReturn"} onInput={onInput} />
                <InputGroup labelText={"Duration"} valueKey={"duration"} onInput={onInput} />
            </div>
        </div>
    )
}