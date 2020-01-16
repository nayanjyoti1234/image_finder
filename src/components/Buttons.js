import React      from "react";

const Buttons = (props) => {
	const buttonClick = (event) => {
		props.onClick (event.target.value);
	};

	return (
		<div>
			<button className='bt1' onClick={buttonClick} value="happy">Happy</button>
			<button className='bt2' onClick={buttonClick} value="sad">Sad</button>
			<button className='bt3' onClick={buttonClick} value="smile">Smile</button>
			<button className='bt4' onClick={buttonClick} value="angry">Angry</button>
		</div>
	);
};

export default Buttons;
