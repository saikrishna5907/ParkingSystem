import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
import Aux from '../../highOrderComponent/Aux';
// import Navbar from '../../components/Layout/Navbar/Navbar';
import Layout from '../../components/Layout/Layout';
import classes from '../ParkingArea/parkingArea.module.css';
import ParkingAreaCards from './ParkingAreaCard/parkingAreaCard';
// import GaugeContainer from './ParkingAreaRadialGauge/parkingAreaChart';
import axios from 'axios';
class ParkingArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            parkingAreas: []
        }
    

    }
    componentDidMount(){
        axios.get('http://localhost:5001/api/parkingAreas')
        .then(res => {
            const parkingAreas = res.data;
            this.setState({parkingAreas});
        })        
       
    }
    
    render() {        
        return (
           
            <Aux>           
               <Layout>                
                <Jumbotron className={classes.JumboStyle}>
                    <ParkingAreaCards/>
                </Jumbotron>
                </Layout>
            </Aux>
        );
    }
}
export default ParkingArea;