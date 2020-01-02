import React from 'react'
import Team from '../components/team'
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
import { Link } from 'react-router-dom'


class Standings extends React.Component{

    // const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    //     columns,
    //     data,
    //   })
    state = {
        teams: []
    }


    handleSort=(column)=>{
        
        let teams = [...this.props.teams]
        switch (column) {
            case "Team":
                
                teams = teams.sort((a,b) =>{
                   if(a.name < b.name) return -1  
                   if(a.name > b.name) return 1  
                   return 0
                })
                break;
            case "W":
                teams = teams.sort((a,b) =>{
                    if(a.win > b.win) return -1  
                    if(a.win < b.win) return 1  
                    return 0
                 })
                break;
            case "L":
                teams = teams.sort((a,b) =>{
                    if(a.loss > b.loss) return -1  
                    if(a.loss < b.loss) return 1  
                    return 0
                 })
                break;
            case "PCT":
                teams = teams.sort((a,b) =>{
                    if(a.win_percentage > b.win_percentage) return -1  
                    if(a.win_percentage < b.win_percentage) return 1  
                    return 0
                 })
                break;
            case "HOME":
                teams = teams.sort((a,b) =>{
                    if(a.home_win > b.home_win) return -1  
                    if(a.home_win < b.home_win) return 1  
                    return 0
                 })
                break;
            case "AWAY":
                teams = teams.sort((a,b) =>{
                    if(a.away_win > b.away_win) return -1  
                    if(a.away_win < b.away_win) return 1  
                    return 0
                 })
                break;
            case "DIV":
                teams = teams.sort((a,b) =>{
                    if(a.division_win > b.division_win) return -1  
                    if(a.division_win < b.division_win) return 1  
                    return 0
                 })
                break;
            case "CONF":
                teams = teams.sort((a,b) =>{
                    if(a.conference_win > b.conference_win) return -1  
                    if(a.conference_win < b.conference_win) return 1  
                    return 0
                 })
                break;
            case "STREAK":
                teams = teams.sort((a,b) =>{
                    if(a.streak > b.streak) return -1  
                    if(a.streak < b.streak) return 1  
                    return 0
                 })
                break;
            case "L10":
                teams = teams.sort((a,b) =>{
                    if(a.last_ten_win > b.last_ten_win) return -1  
                    if(a.last_ten_win < b.last_ten_win) return 1  
                    return 0
                 })
                break;
            default:

        }

        this.setState({teams:[...teams]})

    }

    render(){
        console.log(this.props.teams)
        return(

            <Paper style={{margin:"10px"}}>
            <Table style={{backgroundColor:"black"}}>
            <TableHead>
                <TableRow style={{color:"white"}}>
                <TableCell width="1%" style={{color:"white"}}></TableCell>
                <TableCell onClick={()=> this.handleSort("Team")}style={{color:"white"}}>Team</TableCell>
                <TableCell onClick={()=> this.handleSort("W")}style={{color:"white"}}>W</TableCell>
                <TableCell onClick={()=> this.handleSort("L")}style={{color:"white"}}>L</TableCell>
                <TableCell onClick={()=> this.handleSort("PCT")}style={{color:"white"}}>PCT</TableCell>
                <TableCell onClick={()=> this.handleSort("HOME")}style={{color:"white"}}>HOME</TableCell>
                <TableCell onClick={()=> this.handleSort("AWAY")}style={{color:"white"}}>AWAY</TableCell>
                <TableCell onClick={()=> this.handleSort("DIV")}style={{color:"white"}}>DIV</TableCell>
                <TableCell onClick={()=> this.handleSort("CONF")}style={{color:"white"}}>CONF</TableCell>
                <TableCell onClick={()=> this.handleSort("STREAK")}style={{color:"white"}}>STREAK</TableCell>
                <TableCell onClick={()=> this.handleSort("L10")}style={{color:"white"}}>L10</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.teams.length === 0 ? this.props.teams.map(team => (
                <TableRow key={team.id}>
                    <TableCell style={{color:"white"}} width="1%" align="center"> <img src = {team.logo} style = {{maxWidth: "28px", maxHeight: "21px"}} /></TableCell>
                    <TableCell style={{color:"white"}} align="left"> <Link to={`/team/${team.id}`}>{team.name}</Link></TableCell>
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
                )): this.state.teams.map(team => (
                    <TableRow key={team.id}>
                        <TableCell style={{color:"white"}} width="1%" align="center"> <img src = {team.logo} style = {{maxWidth: "28px", maxHeight: "21px"}} /></TableCell>
                        <TableCell style={{color:"white"}} align="left"> <Link to={`/team/${team.id}`}>{team.name}</Link></TableCell>
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