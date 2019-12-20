import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import GameContainer from './components/gameContainer'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

class App extends React.Component{
  
  state = {
    games: []
  }

  componentDidMount(){
    fetch("https://api-nba-v1.p.rapidapi.com/leagues/", {
      headers:{
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	      "x-rapidapi-key": "3f7b8337f8msh54164a2afdb63a2p12c84fjsn17115393b37d"
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render(){
    
    return (
      <div id="App" style={{backgroundColor: "black", color:"white"}}>
        <AppBar style={{backgroundColor: "black", color:"white"}}><Typography variant="h6">
                NBA by Pete
              </Typography>
        </AppBar>
        <br/>
        <Switch>
            <Route path="/home" render={()=> <GameContainer games={this.state.games}/>}/>
        </Switch>
      </div>
    );

  }
}

export default App;
