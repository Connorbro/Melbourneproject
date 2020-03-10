import React, { Component } from 'react';


class Pricefilter extends Component {
    constructor(){
        super()
        this.state = {
          jedi: [],
          searchfield: ''
        }
      }
    
    
      // Loop through API
      componentDidMount(){
        fetch('https://swapi.co/api/people/1')
          .then(response => { return response.json()})
          .then(people => this.setState({jedi:people}))
      }
    
      onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value)
      }   
    
      render() {
        const {jedi, searchfield} = this.state;
        const filteredCharacters = jedi.filter(jedi => {
          return jedi.name.toLowerCase().includes(searchfield.toLowerCase());
        })
      }
    }



export default Pricefilter;