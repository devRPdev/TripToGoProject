'use strict';

import React from 'react';
import { Card, CardBody, Button, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';

export default class PlanningTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destinations: [
                {att_id: 1,att_country: "France",att_city: "Paris",att_name: "Eiffel",att_location: "North",att_howLong: "1-5 Days",att_type: "culture;outdoors",att_difficulty: "easy"},
                {att_id: 2,att_country: "France",att_city: "Le Lavandou",att_name: "Restaurant",att_location: "North",att_howLong: "1 Days",att_type: "wildlife",att_difficulty: "medium"},
                {att_id: 3,att_country: "France",att_city: "Nice",att_name: "Vieille Ville",att_location: "South",att_howLong: "1-5 Days",att_type: "lodging",att_difficulty: "none"},
              ],
         
          searchcountry: 'N/A',
          startDate: null,
          endDate: null,
          check_culture: false,
          check_outdoors: false,
          check_wildlife: false
        };
      }

      getComponent(destination) {
        switch (destination.att_name) {
          case 'Eiffel':
            return ( <Card>
                <CardImg top width="30%"
                src="https://kids.nationalgeographic.com/content/dam/kids/photos/Countries/A-G/france-eiffel-tower.adapt.945.1.jpg" 
                alt="france-eiffel-tower" />
                <CardBody>
                <CardTitle>france</CardTitle>
                <CardSubtitle>eiffel-tower</CardSubtitle>
                <CardText></CardText>
                <Button>More Details</Button>
                </CardBody>
            </Card>);
          case 'Vieille Ville':
            return ( <Card>
                <CardImg top width="30%"
                src="https://novagodina.bg/pictures/ebff20bf8ef2cfed0eeb5bdab2338db2.jpg" 
                alt="france Vieille Ville" />
                <CardBody>
                <CardTitle>france</CardTitle>
                <CardSubtitle>Vieille Ville</CardSubtitle>
                <CardText></CardText>
                <Button>More Details</Button>
                </CardBody>
            </Card>);
          case 'Restaurant':
            return (<Card>
                <CardImg top width="30%"
                src="https://s.abcnews.com/images/International/gty_france_restaurant_kb_130613_wmain.jpg" 
                alt="france Restaurant" />
                <CardBody>
                <CardTitle>france</CardTitle>
                <CardSubtitle>Restaurant</CardSubtitle>
                <CardText></CardText>
                <Button>More Details</Button>
                </CardBody>
            </Card>);
        }
      }

    render() {
        return (
            <div class="planningTrip">
                <h1>Planning Trip</h1>
                {this.state.destinations.map((destination) => this.getComponent(destination)) }
            </div>
        );
    }
}
