import React from 'react';

const Emoji = (props) => {
		console.log(props);
	return (
		<div className='imageStyle'>
			<img className='image' src={props.imgUrl} alt='find'/>
		</div>
	);
};

export default Emoji;
