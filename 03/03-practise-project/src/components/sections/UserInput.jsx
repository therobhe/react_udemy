import InputGroup from "../ui/InputGroup.jsx"
export default function UserInput() {
    return (
        <div id={"user-input"} className={"input-group"}>
            <InputGroup labelText={"Initial Investment"} />
            <InputGroup labelText={"Annual Investment"} />
            <InputGroup labelText={"Expected Return"} />
            <InputGroup labelText={"Duration"} />
        </div>
    )
}