export default function InputGroup({ labelText, valueKey, onInput }) {
    return (
        <div>
            <label htmlFor={labelText}>{labelText}</label>
            <input id={labelText}
                   type="number"
                   onChange={(input) => {
                       onInput(valueKey, input.target.value)
                   }}
            />
        </div>
    )
}