import './App.css';
import React, { Component } from 'react'
import { LikeButton } from './components/Like-Button';
import SearchButton from './components/Search-Button';



class App extends Component {
	constructor() {
		super();
		this.state = {
			nome: "Wyllian",
		}
	};

	render() {
		return (
			<div className="App">
				<div onClick={() => { this.setState({ nome: "Carlos"}) }}> {this.state.nome} </div>
				<LikeButton></LikeButton>
				<SearchButton></SearchButton>
			</div>
		)
	};
};


export default App;
