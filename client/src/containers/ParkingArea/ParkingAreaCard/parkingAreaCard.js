import Card from 'react-bootstrap/card';
import CardDeck from 'react-bootstrap/CardDeck'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SvgIcon from '../../ParkingArea/SvgIcon/svgIcon';
import classes from '../ParkingAreaCard/parkingAreaCard.module.css'
class ParkingAreaCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            parkingAreas: [],
            percentage: 0.0
        }
    }
    setFillPercentage(available, total) {
        let percent = (available/total)* 100;
        // percent = (percent < 0) ? 0 : (percent > 100) ? 100 : percent;
        return percent;
    }
    componentDidMount() {
        axios.get('http://localhost:5001/api/parkingAreas')
            .then(res => {
                const parkingAreas = res.data;
                this.setState({ parkingAreas });
            })
    }
    render() {
        const parkingAreaCards = this.state.parkingAreas.map((pc, key) => {
            this.state.percentage = this.setFillPercentage(pc.noOfAvailableSpots,pc.totalParkingSpots);
            return (
                <Card key={pc._id}>
                    <Card.Header variant="top" style= {{backgroundColor: 'black',color: 'white'}}>
                        <Card.Title>{pc.name}</Card.Title>
                    </Card.Header>
                    <Card.Body style= {{backgroundColor: '#4877A4',color: 'white'}}>
                        <SvgIcon percentage = {this.state.percentage}/>
                        <Card style= {{backgroundColor: '#4877A4', border: 'none',color: 'black'}}>
                            <Card.Text>
                                Total number of Spots in this area: <strong >{pc.totalParkingSpots}</strong>
                                <br />
                                Number of Occupied Spots In this Area: <strong style= {{color: '#DA6630'}}>{pc.noOfOccupiedSpots}</strong>
                                <br />
                                <strong>Number of Available Spots: <span style= {{backgroundColor: '#4877A4',color: '#E6FAAB'}}>{pc.noOfAvailableSpots}</span></strong>
                            </Card.Text>
                        </Card>


                    </Card.Body>
                    
                        {/* <Button variant="success" size="md" block>
                            Block level button
                        </Button> */}
                        <Link style={{ textDecoration: 'none' }}  radialValue={this.state.percentage} className={classes.linkStyle} to={{ pathname: `/parkingSpotsInParticularArea/${pc.name}` }}>Parking Spots Status</Link>

                    
                </Card>
            );
        })
        return (
            <CardDeck>
                {parkingAreaCards}
            </CardDeck>
        );
    }
}
export default ParkingAreaCard;