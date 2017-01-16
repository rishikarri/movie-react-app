import React, { Component } from 'react';
import $ from 'jquery'

//custom modules/components
import BootstrapNavBar from './BootstrapNavBar.js';


// bootstrap & custom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
    constructor(props){
        super(props);
    }
    
	render() {
		return (
    	   <div className="container">
    	       <div className="row">
                    <BootstrapNavBar />
                    <h1>Your posters here</h1>
                    {this.props.children}
    	       </div>
    	   </div>
		);
	}
}

export default App;
