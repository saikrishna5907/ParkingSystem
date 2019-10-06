import React, { Component } from 'react';

import RadialGauge from '../ParkingArea/radialGauge/radialGauge';
import axios from 'axios'
import Layout from '../../components/Layout/Layout';
import Typography from '@material-ui/core/Typography';
import classes from '../ParkingSpots/parkingSpot.module.css';
import Container from '@material-ui/core/Container';
import SpotsIterationComponent from './SpotsIterationComponent/SpotsIterationComponent';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { number } from 'prop-types';

class ParkingSpot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingAreaName: props.match.params.name,
            parkingArea: [],
            fullPercentageInArea: 0
        }

    }

    componentDidMount() {

        axios.get(`http://localhost:5001/api/parkingAreasByName/${this.state.parkingAreaName}`)
            .then(res => {
                const parkingArea = res.data;
                this.setState({ parkingArea });
            });
    }
    render(match) {
        const perc = this.state.parkingArea.map(x => {
            this.state.fullPercentageInArea = (parseInt(x.noOfOccupiedSpots) / parseInt(x.totalParkingSpots)) * 100;
        });
        return (
            <Layout>
                let percentage=
                <br />

                <MDBContainer className={classes.containerStyle} maxwidth="md">
                    {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}  */}
                    <MDBRow>
                        <MDBCol>
                            <RadialGauge parkingAreaName={this.state.parkingAreaName} percentage={this.state.fullPercentageInArea}></RadialGauge>
                        </MDBCol>
                    </MDBRow>
                    <br />
                    <br />
                    <br />
                    <br />
                    <SpotsIterationComponent parkingAreaName={this.state.parkingAreaName} />
                    {/* </Typography>  */}

                </MDBContainer>

            </Layout >
        );

    }
}
export default ParkingSpot;