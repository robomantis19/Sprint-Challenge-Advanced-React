import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import axios from 'axios'; 
import './App.css';
import DisplayPlayers from './components/DisplayPlayers'
class App extends React.Component {
  state = {
    players: [], 
     
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res => { 
      console.log(res.data);
      let data1 = res.data;
      for(let i in data1){
        console.log(data1[i])
        let data = data1[i]
        this.setState({players : [...this.state.players, {id: data.id, name: data.name, country: data.country, searches: data.searches}]})
      }
    })
  }
  render() {
    return (
      <div className="App">
        <DisplayPlayers players = {this.state.players}/>
        
      </div>
    );
  }
}

export default App;
