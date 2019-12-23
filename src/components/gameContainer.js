import React from 'react'
import Game from './game'

class GameContainer extends React.Component{
    render(){
        return(
            <div className="MuiContainer-root jss247 MuiContainer-maxWidthMd">
                {this.props.teams.map(team =>{
                    return <Game team={team}/>
                })}
            </div>
        )
    }
}

export default GameContainer