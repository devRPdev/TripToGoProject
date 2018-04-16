'use strict';

import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Register extends React.Component {
  render() {
    return (
      <div className="home centerDiv centerText halfWidth">
          <Card>
            <CardHeader
              title="Register"
            />
            <TextField
              hintText="Enter here your username"
              floatingLabelText="Username"
            /><br/>
            <TextField
              hintText="Enter here your password"
              floatingLabelText="Password"
            /><br/>
            <TextField
              hintText="Enter here your first name"
              floatingLabelText="First Name"
            /><br/>
            <TextField
              hintText="Enter here your last name"
              floatingLabelText="Last Name"
            /><br/>
            <TextField
              hintText="Enter here your age"
              floatingLabelText="Age"
            /><br/>
            <TextField
              hintText="Enter here your email"
              floatingLabelText="Email"
            /><br/>
            <span>Gender: </span>
            <DropDownMenu value={1}>
              <MenuItem value={1} primaryText="Male" />
              <MenuItem value={2} primaryText="Female" />
            </DropDownMenu>><br/>
            <CardActions>
              <FlatButton label="Done"/>
              <FlatButton label="Cancel"/>
            </CardActions>
          </Card>
      </div>
    );
  }
}
