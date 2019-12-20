import React from 'react'
import { Card } from 'semantic-ui-react'


class Game extends React.Component{
    render(){
        return (
        
            <Card>
                <br/>
                <div className="extra content" style={{border: "white; 2px"}}>
                    {this.props.game.teams[0]}({this.props.game.sites[0].odds.spreads.points[0]}) vs {this.props.game.teams[1]}({this.props.game.sites[0].odds.spreads.points[1]})
                    
                </div>
            </Card>
        )
    }
}

export default Game