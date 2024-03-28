export default function InputGroup({ labelText, valueKey, onInput }) {
	return (
		<div>
			<label htmlFor={labelText}>{labelText}</label>
			<input
				id={labelText}
				type='number'
				onChange={(event) => {
					onInput(valueKey, Number(event.target.value))
				}}
			/>
		</div>
	)
}
