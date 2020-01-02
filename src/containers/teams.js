import React from 'react'
import TeamCard from '../components/teamCard'
import '../App.css'


class Teams extends React.Component{

    render(){
        return(
            <div className="row" style = {{backgroundColor: "black", textAlign: "center"}}>
                {this.props.teams.map(team => {
                    return(
                        <TeamCard team = {team}/>
                    )
                })}
            </div>
            
              
        )
    }
    
}

export default Teams