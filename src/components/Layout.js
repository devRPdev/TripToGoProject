'use strict';

import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconHome from 'material-ui/svg-icons/action/home';
import IconLogin from 'material-ui/svg-icons/hardware/keyboard-backspace';
import IconRegister from 'material-ui/svg-icons/social/person-add';
import IconBuildTrack from 'material-ui/svg-icons/maps/transfer-within-a-station';
import IconTripPlan from 'material-ui/svg-icons/maps/my-location';
import { browserHistory } from 'react-router';

const homeIcon = <IconHome />;
const loginIcon = <IconLogin />;
const registerIcon = <IconRegister />;
const buildTrackIcon = <IconBuildTrack />;
const tripPlanIcon = <IconTripPlan />;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.routeToPageByIndex = this.routeToPageByIndex.bind(this);
  }

  selectIndex(index) {
    if(this.state.selectedIndex !== index) {
      this.setState({selectedIndex: index},
        this.routeToPageByIndex(index));
    }
  }

  routeToPageByIndex(index) {
    if(index != null) {
      if(index === 1) {
        browserHistory.push("/login");
      }
      else if(index === 2) {
        browserHistory.push("/register");
      }
      else if(index === 3) {
        browserHistory.push("/buildTrack");
      }
      else if(index === 4) {
        browserHistory.push("/planTrip");
      }
      else {
        browserHistory.push("/");
      }
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">
          <header>
            <Link to="/">
              <img className="logo" src="/img/logo.png"/>
            </Link>
            <Paper zDepth={1} className="navBar halfWidth">
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="Home"
                  icon={homeIcon}
                  onClick={this.selectIndex.bind(this, 0)}
                />
                <BottomNavigationItem
                  label="Sign in"
                  icon={loginIcon}
                  onClick={this.selectIndex.bind(this, 1)}
                />
                <BottomNavigationItem
                  label="Register"
                  icon={registerIcon}
                  onClick={this.selectIndex.bind(this, 2)}
                />
                <BottomNavigationItem
                  label="Build Track"
                  icon={buildTrackIcon}
                  onClick={this.selectIndex.bind(this, 3)}
                />
                <BottomNavigationItem
                  label="Locations"
                  icon={tripPlanIcon}
                  onClick={this.selectIndex.bind(this, 4)}
                />
              </BottomNavigation>
            </Paper>
          </header>
          <div className="app-content">{this.props.children}</div>
          <footer>
            <p>
              © 2018  TripToGo ®
            </p>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}
