import React, { Component } from 'react';

import Form     from './components/Form.js';
import Emoji    from './components/Emoji.js';

const clientID = '163f8fc2a935e433cb2017e397a1064600adad35463bf8516025ff63014c5051';

class App extends Component {
	state = { 
		imgUrl : ''
	}

	getImage = async (e) => {
		e.preventDefault();
		const searchedImg = e.target.elements[0].value;
		const url = `https://api.unsplash.com/search/photos/?client_id=${clientID}&query=${searchedImg}`;
		const imageFetched= await fetch(url);
		const data = await imageFetched.json();
		console.log(data.results[0].urls.regular);
		this.setState({imgUrl:data.results[0].urls.regular});
	}

	render() {
    	return (
			<div>
				<Form getImage={this.getImage}/>
    	     	<Emoji imgUrl={this.state.imgUrl}/>
    	  	</div>
    	);
  	}
}

export default App;
