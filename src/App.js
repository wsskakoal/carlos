import './App.css';
import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Navbar from './components/Navbar';
// import Menu from './components/Menu';
// import Conteudo from './components/Conteudo';
// import Secoes from './components/Secoes';
// import Destaque from './components/Destaque';
import Logo from './components/Logo';
import TelaVideo from './components/Video';
import { Botao } from './components/Button';


function App() {

	return (
		<div className="App">
			<div className="logo"><section><Logo></Logo></section></div>
			<TelaVideo></TelaVideo>
<Botao></Botao>
		</div>

	);
}

export default App;
