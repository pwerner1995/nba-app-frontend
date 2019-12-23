import React from 'react'
import { Card } from 'semantic-ui-react'


class Game extends React.Component{
    render(){
        return (
        
            <Card>
                <br/>
                <div className="extra content" style={{border: "white; 2px"}}>
                    <img src= {this.props.team.logo} style = {{border: "1px solid #ddd",
                                                                    padding: "5px",
                                                                    width: "50px"}}/>
                    {this.props.team.full_name}
                    
                </div>
            </Card>
        )
    }
}

export default Game