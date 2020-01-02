import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import React from 'react'

function NavBar(){
    return(
        
        <div className = "nav-bar">
            <img src={"https://www.stickpng.com/assets/images/58428defa6515b1e0ad75ab4.png"} style = {{maxWidth: "10%", maxHeight: "12%"}} />
            
                <Link className = "nav-link" to ="/standings"><div style={{color:"white"}}>Team Standings</div></Link>
                <Link className = "nav-link" to ="/teams"><div style={{color:"white"}}>Teams</div></Link>
                <Link className = "nav-link" to ="/teams"><div style={{color:"white"}}>Teams</div></Link>
                <Link className = "nav-link" to ="/teams"><div style={{color:"white"}}>Teams</div></Link>
            
        
        </div>
    )
}

export default NavBar