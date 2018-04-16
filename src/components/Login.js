'use strict';

import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import fetch from 'node-fetch';

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userPass: ''
    };
  }

  handleChangeUserName(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  handleChangeUserPass(event) {
    this.setState({
      userPass: event.target.value,
    });
  }

  loginUser() {
    if (this.state.userName && this.state.userPass) {

      fetch('/isUserValid', {
        method: 'POST',
        body: JSON.stringify({name: this.state.userName, pass: this.state.userPass}),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then((res) => {
          if(res && res.isValid) {
            alert("User is OK");
          }
          else {
            alert("No such user");
          }
        })
        .catch((err) => {
          console.error(err)
        });
    }
    else {
      alert("Some fields are still empty");
    }
  }

  render() {
    return (
      <div className="home centerDiv centerText halfWidth">
        <Card>
          <CardHeader
            title="Login"
          />
          <TextField
            hintText="Enter here your username"
            floatingLabelText="Username"
            value={this.state.userName}
            onChange={this.handleChangeUserName.bind(this)}
          /><br/>
          <TextField
            hintText="Enter here your password"
            floatingLabelText="Password"
            type="password"
            value={this.state.userPass}
            onChange={this.handleChangeUserPass.bind(this)}
          />
          <CardActions>
            <FlatButton label="Login" onClick={this.loginUser.bind(this)}/>
            <FlatButton label="Register"/>
          </CardActions>
        </Card>
      </div>
    );
  }
}
