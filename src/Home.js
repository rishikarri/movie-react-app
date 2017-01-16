// Dependencies / Components
import React, { Component } from 'react'; 
import $ from 'jquery'; 

//custom component/modules
import Poster from './Poster';
import Constants from './Constants';
import Config from './Config';
import DiscoverButton from './DiscoverButton';

import './App.css';

class Home extends Component{
	constructor(props){
		super(props); 
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.state = {
			moviePosters: []
		}
	}
	
    componentDidMount() {        
        var url = Constants.baseUrl + Constants.nowPlayingEP + Config.apiKey;
        $.getJSON(url, (movieData)=>{
            this.setState({
                moviePosters: movieData.results
            })        
        })
    }	

    handleCategoryChange(categoryApiUrl){
        	var url = Constants.baseUrl + categoryApiUrl + Config.apiKey; 
        	var self = this;
        	console.log(url);

        	$.getJSON(url, (categoryData)=>{
        		this.setState({
        			moviePosters: categoryData.results
        		})
        	})
     }



	render(){
        var postersArray = [];
        this.state.moviePosters.map((currentPoster, index) =>{
            postersArray.push(<Poster poster={currentPoster} key={index} />)
        });
        // custom function to update home's state var, FROM THE CHILD BUTTON
        

        // build buttons with discover buttons component
        var discoverButtons = [];
        Constants.discoverLinks.map((category, index)=>{
        	discoverButtons.push(
        		<DiscoverButton buttonLink={category.link} functionFromParent={this.handleCategoryChange} buttonText={category.buttonText} key={index} />
        	)

        })
		return(
			<div>
				{discoverButtons}
				{postersArray}
				}
			</div>
		)
	}
}

export default Home;