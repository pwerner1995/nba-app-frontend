import React from 'react'
import Game from './game'

class GameContainer extends React.Component{
    render(){
        return(
            <div className="MuiContainer-root jss247 MuiContainer-maxWidthMd">
                {this.props.games.map(game =>{
                    return <Game game={game}/>
                })}
            </div>
        )
    }
}

export default GameContainer