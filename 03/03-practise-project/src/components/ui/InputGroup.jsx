export default function InputGroup({ labelText }) {
    return (
        <div>
            <label htmlFor={labelText}>{labelText}</label>
            <input id={labelText}
                   type="number"
                   onChange={(input) => {
                       console.log(input.target.value)
                   }}
            />
        </div>
    )
}