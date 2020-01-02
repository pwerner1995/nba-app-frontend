import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom'

class TeamCard extends React.Component{

    render(){
        return(
            <div className="col-lg-4 card" style={{}}>
                <Link to={`/team/${this.props.team.id}`}>
                <div className ="row" style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "10px",
                            maxHeight: "85px",
                            backgroundColor: "black",
                            boxShadow: "1px 1px 2px 1px white",
                            justifyContent: "flex-end"}}>
                    <div style={{paddingRight: "10px"}}>

                        <img className="image-fluid" src={this.props.team.logo} style = {{maxWidth: "100px", maxHeight: "65px"}}  />
                    </div>
                    <div className="col-lg-8" style={{display: "flex", justifyContent: "center"}}>
                        <p> <strong >{this.props.team.name}</strong>
                        <br/>
                        {this.props.team.win}-{this.props.team.loss}</p>
                    </div>
                </div>
                </Link>

            </div>
           
        )
    }
}

export default TeamCard