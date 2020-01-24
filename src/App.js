import React, { Component } from 'react';

import Form     from './components/Form.js';
import Emoji    from './components/Emoji.js';
import Spinner  from './components/Spinner.js';

const clientID  = '163f8fc2a935e433cb2017e397a1064600adad35463bf8516025ff63014c5051';
const arr = [];

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			imgUrl    : '',
			key_value : {
				key   : '',
				value : '',
			},
			loading   : false,
		}
	}
	componentDidMount(){
		let data = localStorage.getItem('key');

		if (data) {
			arr = JSON.parse(data);
		}
		else {
			localStorage.setItem('key',arr);
		}
	}

	getImage = async (e) => {
		let count = 0;
		let arr1;
		let searchedImg;

		e.preventDefault();
		console.log(e.target.value);
		searchedImg = e.target.value;
		searchedImg.toLowerCase();
		arr1 = localStorage.getItem('key');
		if (arr1)
			arr1 = JSON.parse(arr1);
		console.log('==',arr1);
		for(var i=0;i<arr1.length;i++){
			if (searchedImg === arr1[i].key) {
				count=1;
				this.setState({imgUrl:arr1[i].value});
				break;
			}
		}		
		if (count === 0) {
			const url = `https://api.unsplash.com/search/photos/?page=1&per_page=1&client_id=${clientID}&query=${searchedImg}`;
			this.setState({loading:true});
			const imageFetched= await fetch(url);
			const data = await imageFetched.json();

			if (data.total === 0) {
				this.setState({imgUrl:'',loading:false});
			}
			else {
				this.setState({imgUrl:data.results[0].urls.regular,loading:false});
				this.setState({key_value:{value:data.results[0].urls.regular,key:searchedImg}});
				arr.push(this.state.key_value);
				console.log('===arr===',arr);
				localStorage.setItem('key',JSON.stringify(arr));
			}
		}
	}

	render() {
		return (
			<div>
				<Form getImage={this.getImage}/>
				<Emoji imgUrl={this.state.imgUrl}/>
				{this.state.loading ? <Spinner/> : null}
			</div>
			);
	}
}
export default App;
