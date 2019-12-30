import React from 'react'
import Team from './team'
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


class Standings extends React.Component{

    // const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    //     columns,
    //     data,
    //   })
    render(){

        return(
            // <div className="MuiContainer-root jss247 MuiContainer-maxWidthMd">
            //     {this.props.teams.map(team =>{
            //         return <Team team={team}/>
            //     })}
            // </div>

            <Paper >
            <Table style={{backgroundColor:"black"}}>
            <TableHead>
                <TableRow style={{color:"white"}}>
                <TableCell width="1%" style={{color:"white"}}></TableCell>
                <TableCell style={{color:"white"}}>Team</TableCell>
                <TableCell style={{color:"white"}}>W</TableCell>
                <TableCell style={{color:"white"}}>L</TableCell>
                <TableCell style={{color:"white"}}>PCT</TableCell>
                <TableCell style={{color:"white"}}>HOME</TableCell>
                <TableCell style={{color:"white"}}>AWAY</TableCell>
                <TableCell style={{color:"white"}}>DIV</TableCell>
                <TableCell style={{color:"white"}}>CONF</TableCell>
                <TableCell style={{color:"white"}}>STREAK</TableCell>
                <TableCell style={{color:"white"}}>L10</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.teams.map(team => (
                <TableRow key={team.id}>
                    <TableCell style={{color:"white"}} width="1%" align="center"> <img src = {team.logo} style = {{maxWidth: "28px", maxHeight: "21px"}} /></TableCell>
                    <TableCell style={{color:"white"}} align="left"> {team.name}</TableCell>
                    <TableCell style={{color:"white"}}>{team.win}</TableCell>
                    <TableCell style={{color:"white"}}>{team.loss}</TableCell>
                    <TableCell style={{color:"white"}}>{team.win_percentage}</TableCell>
                    <TableCell style={{color:"white"}}>{team.home_win}-{team.home_loss}</TableCell>
                    <TableCell style={{color:"white"}}>{team.away_win}-{team.away_loss}</TableCell>
                    <TableCell style={{color:"white"}}>{team.division_win}-{team.division_loss}</TableCell>
                    <TableCell style={{color:"white"}}>{team.conference_win}-{team.conference_loss}</TableCell>
                    <TableCell style={{color:"white"}}>{team.streak}</TableCell>
                    <TableCell style={{color:"white"}}>{team.last_ten_win}-{team.last_ten_loss}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
            </Paper>
            
              
        )
    }
    
}

export default Standings