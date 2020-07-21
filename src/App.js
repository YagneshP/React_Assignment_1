import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
	state = {
		userName: [ 'Yagnesh', 'Niya', 'Moti' ]
	};
	handleClick = () => {
		this.setState({
			userName: [ 'Yag', 'Niya', 'Jordan' ]
		});
	};
	handleChange = (event) => {
		this.setState({
			userName: [ event.target.value, 'Niya', 'Jordan' ]
		});
	};

	render() {
		const style = {
			border: '1px solid yellow',
			backgroundColor: 'Gray',
			padding: '16px',
			cursor: 'pointer'
		};
		return (
			<div className="App">
				<h1>Assignment 1</h1>
				<button style={style} onClick={this.handleClick}>
					Change the name
				</button>
				<UserInput change={this.handleChange} />
				<UserOutput userName={this.state.userName[0]} />
				<UserOutput userName={this.state.userName[1]} />
				<UserOutput userName={this.state.userName[2]} />
			</div>
		);
	}
}

export default App;
