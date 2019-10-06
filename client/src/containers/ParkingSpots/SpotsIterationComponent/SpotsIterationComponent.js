import React, { Component } from 'react';
import Aux from '../../../highOrderComponent/Aux';
import axios from 'axios';
import Card from 'react-bootstrap/card';
import classes from '../SpotsIterationComponent/SpotsIteration.module.css';
class SpotsIterationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parkingSpotsOfThisArea: [],
            cardBackground: "success"
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5001/api/parkingSpotsInParticularArea/${this.props.parkingAreaName}`)
            .then(res => {
                const parkingSpotsOfThisArea = res.data;
                this.setState({ parkingSpotsOfThisArea });
            })

    }
    render() {
        const parkingSpots = this.state.parkingSpotsOfThisArea.map((spot, key) => {
            this.state.cardBackground = spot.isSpotVacant?"success": "danger";
            const allowedTime = spot.allowedParkingTimeInMins + "Mins";

            return (
                
                <Aux key={spot._id}>
                    <Card bg={this.state.cardBackground} className={classes.card}>
                        <Card.Header>{allowedTime}</Card.Header>
                    </Card>
                </Aux>
            );
        });
        return (
            <div className="d-flex align-content-center flex-wrap bd-highligh example-parent" style={{ height: '200px' }}>
                {parkingSpots}                
            </div>
           
        );
    }
}
export default SpotsIterationComponent;