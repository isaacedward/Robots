import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
	         searchfield: ''

		}

	}

	onsearhChange = (event) => {
     this.setState({ searchfield: event.target.value})  
	}

	componentDidMount() {
		this.setState({ robots: robots })
	}
	render() {
				const filteredRobots = this.state.robots.filter(robots =>{
		     	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		     })
		return (
		<div 
		   className='tc'>
			<h1 className='f1'>My Robots Friends</h1>
			<SearchBox searchChange={this.onsearhChange}/>
	        <CardList robots= { filteredRobots }/>
        </div>
		);

	}
	
}

export default App;
