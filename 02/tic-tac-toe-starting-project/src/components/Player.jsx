/**
 * Hook imports
 */
import { useState } from 'react';

/**
 * Player Component - representation of a player with his name and chosen symbol
 *
 * @param initialName - default value that can be transmitted as a prop
 * @param symbol - the symbol the player plays with
 * @param isActive - determines if it is one players turn
 * @param onChangeName - callback function that sets the name for the game over screen
 * @returns {JSX.Element}
 * @constructor
 */
function Player({ initialName, symbol, isActive, onChangeName }) {
	/**
	 * States
	 */
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	/**
	 * Custom Event Handler Functions
	 */
	const handleEditClick = () => {
		// bad practice: setIsEditing(!isEditing) --> would be scheduled & not immediately executed
		setIsEditing((editing) => !editing); // guarantees to work with the latest available state
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	};
	// onChange automatically includes the event that has happenend (keystroke etc.) and the target this event has occured on (input field in this case)
	const handleChange = (event) => {
		setPlayerName(event.target.value);
	};

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{!isEditing && <span className='player-name'>{playerName}</span>}
				{isEditing && (
					<input
						type='text'
						value={playerName}
						onChange={handleChange}
						required
					/>
				)}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
		</li>
	);
}

export default Player;
