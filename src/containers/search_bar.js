import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		/*Binding context of onInputChange*/

		/*
		this.onInputChange.bind(this);
			=> this => Instance of Search Bar
			=> onInputChange => has a function of onInputChange
			=> bind => bind that function to (this) which is of SEARCH BAR

		this.onInputChange
			=> New Bound instance of RHS
			=> Replace RHS to LHS


		take this exsiting function => onInputChange
		bind it to this => with SearchBar
		and replace existing function with new instance => this.onInputChange => LHS
		*/

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({ term: event.target.value });
		/* this.setState is not a part of onInputChange function */
	}

	onFormSubmit(event){
		event.preventDefault();

		// we need to go and fetch weather data
		// console.log(this.props);
		this.props.fetchWeather(this.state.term);
		this.setState({
			term: ''
		});
	}


	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">SUBMIT</button>
				</span>
			</form>
		)
	}
}


/*
Hooking ActionCreator's fetchWeather with SEARCH_BAR, basically providing the output to 
SEARCH_BAR as props from ACTION.
*/
function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);