import React from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './components/team'
import { Route, Switch } from 'react-router-dom'
import Standings from './containers/standings'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import NavBar from './components/navBar'
import Signup from './components/signup'
import Teams from './containers/teams'

class App extends React.Component{
  
  state = {
    teams: [],
    players: {}
  }

  componentDidMount(){
    
    fetch("http://localhost:3000/api/v1/teams",{
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
      }
    })
    .then(resp => resp.json())
    .then(data => this.setState({teams: [...data]})) 
    
    fetch("http://localhost:3000/api/v1/players",{
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
      }
    })
    .then(resp => resp.json())
    .then(data => this.setState({players: {...data}}))

    
  }

  render(){
   
    return (
      <div id="App" className = "container" style={{color:"white"}}>
        <NavBar style={{backgroundColor: "black", color:"white", marginBottom:"50px"}}/>
        <Switch >
            <Route path="/standings" render={()=><Standings  teams = {this.state.teams}/>}/>
            <Route path="/team/:id" render={({match})=><Team id={match.params.id} players = {this.state.players}/>}/>
            <Route path="/teams" render={()=><Teams  teams = {this.state.teams}/>}/>
            <Route path="/signup" component={Signup}/>
        </Switch>
      </div>
    );

  }
}

export default App;
