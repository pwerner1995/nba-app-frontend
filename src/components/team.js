import React from 'react'
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from "@material-ui/core/Paper"
import '../App.css'
import { useTable } from 'react-table'
import {withRouter} from 'react-router';

class Team extends React.Component{

    render(){
        console.log(this.props.id)
        // debugger
        return (

            <Paper style={{marginTop:"10px"}}>
            <Table style={{backgroundColor:"black"}}>
            <TableHead>
                <TableRow style={{color:"white"}}>
                <TableCell width="1%" style={{color:"white"}}></TableCell>
                <TableCell style={{color:"white"}}>Name</TableCell>
                <TableCell style={{color:"white"}}>POS</TableCell>
                <TableCell style={{color:"white"}}>EXP</TableCell>
                <TableCell style={{color:"white"}}>COLLEGE</TableCell>
                <TableCell style={{color:"white"}}>COUNTRY</TableCell>
                <TableCell style={{color:"white"}}>HEIGHT (meters)</TableCell>
                <TableCell style={{color:"white"}}>WEIGHT (kg)</TableCell>
                </TableRow>
            </TableHead>
            {this.props.players[`${this.props.id}`] ? <TableBody>
                {this.props.players[`${this.props.id}`].map(player => (
                <TableRow key={player.id}>
                    <TableCell style={{color:"white"}} align="left"> #{player.jersey_number}</TableCell>
                    <TableCell style={{color:"white"}} align="left"> {player.first_name + " " + player.last_name}</TableCell>
                    <TableCell style={{color:"white"}}>{player.position}</TableCell>
                    <TableCell style={{color:"white"}}>{player.years_pro}</TableCell>
                    <TableCell style={{color:"white"}}>{player.college_name === "" || player.college_name === " " ? "N/A" : player.college_name}</TableCell>
                    <TableCell style={{color:"white"}}>{player.country}</TableCell>
                    <TableCell style={{color:"white"}}>{player.height}</TableCell>
                    <TableCell style={{color:"white"}}>{player.weight}</TableCell>
                </TableRow>
                ))}
            </TableBody> : null}
            </Table>
            </Paper>
            
        )
    }
}

export default Team