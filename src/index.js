import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root')); // we want to render our App.js v miste s id "root", viz public->index.html

// <App /> je jsx file, ktere brower nerozumi. to aby ji rozumel se deje interne v Reactu.
// <App /> is our custom jsx. component html.