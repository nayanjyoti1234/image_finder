import React, { Component } from 'react';

import Buttons from './components/Buttons.js';
import Emoji   from './components/Emoji.js'

class App extends Component {
	state = { 
		img : 'sad'
	}

	getImage = (val) => {
		this.setState ({ img : val });
	}

	render() {
    	return (
     	 <div>
			 <Buttons onClick={this.getImage} />
    	     <Emoji img={this.state.img}/>
    	  </div>
    	);
  	}
}

export default App;
