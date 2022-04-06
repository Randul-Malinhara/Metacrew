import React from "react";

import Signup from "./Signup.jsx";
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./NavbarStyle.css";
class LoginControl extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      users: [
        
       /* { username: "amal", password: "a123" },
        { username: "kamal", password: "k123" },
        { username: "saman", password: "s123" }*/
      ],
      welcomeConnect: false,
      trueUsername: "",
      isSign: false,
      isSignUp: false
    };
    this.new = this.props;
  }

  Control = (event) => {
    var newState = this.state.users.concat(this.new.newUser);
    if (this.new.newUser !== undefined) {
      this.setState({
        users: newState
      });
    }
    console.log("Login sucessed ");

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    let loginSuccess = false
    this.state.users.map(user => {
      if (
        user.username === username.value &&
        user.password === password.value
      ) {
        loginSuccess = true;
        window.location.href = "/googlemap";
        return this.setState({
          welcomeConnect: true,
          trueUsername: user.username
        });
      }
    });
  };

  SignUp = () => {
    this.setState({ isSign: true });
  };


  render() {
    return (
       
      <center> 
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{width: "1200px"}}>
        {this.state.isSign ? (
          <Signup dataState={this.state} isClick={this.state.welcomeConnect} />
        ) : (
          <div className="main_box--main--login">
            <label><b  style={{'font-size': '30px',color:'#249c00'}}>Eco Nation</b></label>
            <br></br>
            <input
              type="text" 
              id="username"
              className="form-control  "  style={{width: "50%"}}
              placeholder="Please Enter Your User Name"
              autoComplete="false"
            />
            <br></br>
            <input
              type="password"
              id="password"
              className=" form-control" style={{width: "50%"}}
              placeholder="Please Enter Your Password"
            />
            <button className="btn btn-success" onClick={this.Control} style={{width: "50%"}} >
              LOGIN
            </button>
            <p
              onClick={this.SignUp}
              style={{
                textAlign: "center",
                color: "#262626",
                marginTop: "-5px",
                cursor: "pointer"
              }}
            >
              Sign Up
            </p>
          </div>
        )}
      </div>
      </center>
    );
  }
}

export default LoginControl;
