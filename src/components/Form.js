import React      from "react";

const Form = (props) => {
	return (
		<form onSubmit={props.getImage}>
			<input type='text' name='mood' placeholder='enter your mood ..'/>
			<button>submit</button>
		</form>
	);
};

export default Form;
