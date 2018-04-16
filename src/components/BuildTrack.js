'use strict';

import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export default class BuildTrack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      destinations: [
        {att_id: 1,att_country: "France",att_city: "Paris",att_name: "Eiffel",att_location: "North",att_howLong: "1-5 Days",att_type: "culture;outdoors",att_difficulty: "easy"},
        {att_id: 2,att_country: "France",att_city: "Nice",att_name: "Vieille Ville",att_location: "South",att_howLong: "1-5 Days",att_type: "lodging",att_difficulty: "none"},
        {att_id: 3,att_country: "France",att_city: "Le Lavandou",att_name: "Restaurant",att_location: "North",att_howLong: "1 Days",att_type: "wildlife",att_difficulty: "medium"},
      ],
      searchcountry: 'N/A',
      startDate: null,
      endDate: null,
      check_culture: false,
      check_outdoors: false,
      check_wildlife: false
    };
  }

  updateCountryText(event) {
    this.setState({searchcountry: event.target.value})
  }

  /*startDateChange(event){
    this.setState({startDate: event.target.value});
  };

  endDateChange(event){
    this.setState({endDate: event.target.value});
  };*/

  /*startDateChange=(event, date) => {
    this.setState({
      startDate: date
    });
  };

  endDateChange=(event, date) => {
    this.setState({
      endDate: date
    });
  };*/

  render() {
    let filtered = this.state.destinations.filter(
      (currObject) => {
        return currObject.att_country.toLowerCase().indexOf(this.state.searchcountry.toLowerCase()) !== -1
      }
    );
    return (
      <div className="home centerDiv centerText halfWidth">
        <Card>
          <CardHeader
            title="Enter your preferences"
          />
          <TextField
            hintText="Enter the country"
            floatingLabelText="Country"
            onChange={this.updateCountryText.bind(this)}
          /><br/>
          <DatePicker
            hintText="Start Date"
            value={this.state.startDate}
            //onChange={this.startDateChange}
          />
          <DatePicker
            hintText="End Date"
            value={this.state.endDate}
            //onChange={this.endDateChange}
          />
          <RadioButtonGroup name="difficulty" defaultSelected="medium" style={{ display: 'flex' }}>
            <RadioButton
              value="easy"
              label="Easy"
              style={styles.radioButton}
            />
            <RadioButton
              value="medium"
              label="Medium"
              style={styles.radioButton}
            />
            <RadioButton
              value="hard"
              label="Hard"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <div style={{display: 'flex'}}>
            <Checkbox
              label="Culture"
              style={styles.checkbox}
            />
            <Checkbox
              label="Outdoors"
              style={styles.checkbox}
            />
            <Checkbox
              label="Wildlife"
              style={styles.checkbox}
            />
          </div>
          /*<CardActions>
            <FlatButton label="Submit"/>
          </CardActions>*/
          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Country</TableHeaderColumn>
                <TableHeaderColumn>City</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
                <TableHeaderColumn>Days to stay</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {filtered.map((row) => {
                return <TableRow>
                  <TableRowColumn>{row.att_country}</TableRowColumn>
                  <TableRowColumn>{row.att_city}</TableRowColumn>
                  <TableRowColumn>{row.att_name}</TableRowColumn>
                  <TableRowColumn>{row.att_location}</TableRowColumn>
                  <TableRowColumn>{row.att_howLong}</TableRowColumn>
                </TableRow>;
              })}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}
