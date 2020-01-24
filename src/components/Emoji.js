import React from 'react';

const Emoji = (props) => {
	return (
		<div>
			{ props.imgUrl ? <img className='image' src={props.imgUrl} alt='find'/> : <span className='noimage'>'no image bro'</span> }
		</div>	
	);
};

export default Emoji;
