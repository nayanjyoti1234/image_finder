import React,{Component}  from "react";

const arr1 = [];

class Form extends Component{

	constructor(props){
		super(props);

		this.state = {
			suggestions  : [],
			text         : '',
		};
	}

	onTextChanged = (e) => {

		const value     = e.target.value;
		const arr2      = [];
		let suggestions = [];

		arr1 = localStorage.getItem('key');

		if(arr1) {
			arr1 = JSON.parse(arr1);

			for(var i=0; i< arr1.length; i++){
				arr2[i] = arr1[i].key;
			}
		}

		if (value.length > 0) {
			const regex = new RegExp(`^${value}`,'i');
			suggestions = arr2.sort().filter(v => regex.test(v));
		}

		this.setState(()=>({suggestions:suggestions,text: value}));
		this.props.getImage(e);
	}

	renderSuggestions = () => {

		if (this.state.suggestions.length === 0) {
			return null;
		}
		else{
			return (
				<ul className='ul'>
					{this.state.suggestions.map((item)=><li className='li' onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
				</ul>
				);
		}
	}

	suggestionSelected (value) {

		this.setState(()=>({
			text        : value,
			suggestions : [],
		}));
	}

	render() {
				console.log('rerender');
		return (
			<div className='autocomplete'>
				<input className='input' value={this.state.text} type='text'  
					placeholder='enter your mood ..' onChange={this.onTextChanged} />
				<button value={this.state.text} onClick={this.props.getImage}>click me</button>
				{this.renderSuggestions()}
			</div>
			);
	}

};

export default Form;
