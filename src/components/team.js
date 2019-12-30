import React from 'react'
import { Card } from 'semantic-ui-react'


class Team extends React.Component{
    render(){
        return (
        
            <Card>
                <br/>
                <div className="extra content" style={{border: "white; 2px"}}>
                    <img src= {this.props.team.logo} style = {{
                                                                    width: "15px",
                                                                    height: "15px"}}/>
                    {this.props.team.full_name}
                    
                </div>
            </Card>
        )
    }
}

export default Team