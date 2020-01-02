import React from 'react';


class Signup extends React.Component{
  state = {
    username: "",
    password: "",
    passwordConfirmation: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.password === this.state.passwordConfirmation){
      let new_user = {username: this.state.username}
    fetch("http://localhost:3000/api/v1/signup",{method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify({new_user})
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    } else {
      alert("Passwords don't match try again")
    }
    

  }


  render(){
    return (
      <div className="signup" style={{backgroundColor:"black", color:"white"}}>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>
          <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Password Confirmation" type="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;