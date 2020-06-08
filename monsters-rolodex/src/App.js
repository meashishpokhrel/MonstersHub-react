import React, { Component } from 'react';
import {CardList} from "./componenets/card-list/card-list.component";
import {SearchBox} from "./componenets/search-box/search-box.components";
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.json())
    .then (users => this.setState( {monsters: users }));
  }

  //Creating Method handleChange
  searchAction = (e) => {
    this.setState({searchField: e.target.value});
  }


  render(){

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <SearchBox placeholder="search name" 
        searchAction={this.searchAction} />
        <CardList monsters={filteredMonsters} />
    </div> 
    );
  }
}

export default App;
