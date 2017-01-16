// Dependencies / Components
import React, { Component } from 'react'; 
import $ from 'jquery'; 

//custom component/modules
import Poster from './Poster';

import './App.css';

class Home extends Component{
	constructor(props){
		super(props); 
		this.state = {
			moviePosters: []
		}
	}
	
    componentDidMount() {
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
        $.getJSON(url, (movieData)=>{
            this.setState({
                moviePosters: movieData.results
            })        
        })
    }	

	render(){
        var postersArray = [];
        this.state.moviePosters.map((currentPoster, index) =>{
            postersArray.push(<Poster poster={currentPoster} key={index} />)
        });
		return(
			<div>
				{postersArray}
			</div>
		)
	}
}

export default Home;