//ES6 and / or webpack making use of node - import goes to file at the end 'react' and grabs react
import React from 'react';
import ReactDOM from 'react-dom';
//this line will get us the router and the route from the react-router node module 
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

// custom modules
import App from './App';
import SingleMovie from './SingleMovie.js'
import Home from './Home.js'

//custom CSS
//because this is not a node module, you need to tell it where to look
import './index.css'


ReactDOM.render(
	<Router history={hashHistory}  >
		<Route path='/' component={App} >
			<IndexRoute component={Home} />
  			<Route path='movie/:id' component={SingleMovie} />  		
  		</Route>
	</Router>,
  document.getElementById('root')
);
