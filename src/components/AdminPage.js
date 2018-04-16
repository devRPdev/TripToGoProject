'use strict';

import React from 'react';
import fetch from 'node-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [
        {id: 1, userName: "user1", password: "1", firstName: "Joe" ,lastName: "Tribianny", email: "joe@gmail.com", age: "30", gender: "Male"},
        {id: 2, userName: "user2", password: "2", firstName: "Ross" ,lastName: "Geller", email: "ross@gmail.com", age: "31", gender: "Male"},
        {id: 3, userName: "user3", password: "3", firstName: "Rachel" ,lastName: "Green", email: "rachel@gmail.com", age: "32", gender: "Female"}
      ]
    };
  }

  componentDidMount() {
    fetch('/allUsers', { method: 'GET' })
      .then((res) => {
        this.setState({
          allUsers: res
        })
      })
      .catch((err) => {
        console.error(err)
      });
  }

  render() {
    return (
      <div className="home centerDiv centerText almostFullWidth">
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title="Admin view"
              subtitle="These are the registered users"
            />
            <Table selectable={false}>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>User Name</TableHeaderColumn>
                  <TableHeaderColumn>First Name</TableHeaderColumn>
                  <TableHeaderColumn>Last Name</TableHeaderColumn>
                  <TableHeaderColumn>Email</TableHeaderColumn>
                  <TableHeaderColumn>Age</TableHeaderColumn>
                  <TableHeaderColumn>Gender</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true}>
                {this.state.allUsers.map((user) => {
                  return <TableRow>
                    <TableRowColumn>{user.id}</TableRowColumn>
                    <TableRowColumn>{user.userName}</TableRowColumn>
                    <TableRowColumn>{user.firstName}</TableRowColumn>
                    <TableRowColumn>{user.lastName}</TableRowColumn>
                    <TableRowColumn>{user.email}</TableRowColumn>
                    <TableRowColumn>{user.age}</TableRowColumn>
                    <TableRowColumn>{user.gender}</TableRowColumn>
                  </TableRow>;
                })}
              </TableBody>
            </Table>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}
