import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Standings from './components/standings'
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
    console.log(this.state.teams)
    return (
      <div id="App" style={{backgroundColor: "black", color:"white"}}>
        <AppBar style={{backgroundColor: "black", color:"white", marginBottom:"50px"}}>
                <img src={"https://www.stickpng.com/assets/images/58428defa6515b1e0ad75ab4.png"} style = {{maxWidth: "6%", maxHeight: "8%"}} />
              
        </AppBar>
        <br/>
        <br/>
        <br/>
        <Switch >
            <Route path="/standings" render={()=><Standings  teams = {this.state.teams}/>}/>
        </Switch>
      </div>
    );

  }
}

export default App;
