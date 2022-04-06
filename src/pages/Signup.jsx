import React, { Component } from 'react'
import LoginControl from "./LoginControl"


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignUp: false,
      newUser: null
    }
  }


  NewUser = () => {
    var username = document.getElementById("signUpUsername").value;
    var password1 = document.getElementById("signUpPassword1").value;
    var password2 = document.getElementById("signUpPassword2").value;
    if(password1 === password2){
      if(username !== ""){
        this.setState({
          isSignUp: true,
          newUser: {username: username, password: password1}
        });
      }else{
        alert("User name cannot be blank.")
      }
    }
    else{
      alert("The passwords you entered do not match.");
    }
  }


  render() {
    return (
      <div>
      {
        this.state.isSignUp ?
        <LoginControl newUser={this.state.newUser}/>
        :
        <div style={{width: "500px"}}>
        <div className="main_box--main--signUp" style={{'background-color': '#64c8c8'}}>
        <label><b  style={{'font-size': '30px',color:'#249c00'}}>Eco Nation E Waste Management</b></label>
            <br></br>
          <input type="text" id="signUpUsername" className="form-control" placeholder="Username" autoComplete="false" style={{width: "50%"}}></input>
          <br></br>
          <input type="password" id="signUpPassword1" className="form-control" placeholder="Password"  style={{width: "50%"}}></input>
          <br></br>
          <input type="password" id="signUpPassword2" className="form-control" placeholder="Re-enter the Password " style={{width: "50%"}}></input>
          <br></br>
          <button className="btn btn-success" onClick={this.NewUser} style={{width: "50%"}}>SIGN UP</button>
          <p
              onClick={this.index}
              style={{
                textAlign: "center",
                color: "#262626",
                marginTop: "-5px",
                cursor: "pointer"
              }}
            >
              Login
            </p>
        </div>  
        </div>  
      }
      </div>
    )
  }
}

export default Signup;