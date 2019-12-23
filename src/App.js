import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import GameContainer from './components/gameContainer'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

class App extends React.Component{
  
  state = {
    teams: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/teams",{
      headrs:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
      }
    })
    .then(resp => resp.json())
    .then(data => this.setState({teams: [...data]}))
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
            <Route path="/home" render={()=> <GameContainer teams={this.state.teams}/>}/>
        </Switch>
      </div>
    );

  }
}

export default App;
