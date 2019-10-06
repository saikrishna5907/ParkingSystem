import React, { Component } from 'react';
import Card from 'react-bootstrap/card';
import moment from 'moment';
import Layout from '../../components/Layout/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import classes from '../MyParkingStatus/parkingStatus.module.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios';
//time difference in react
// var now  = "04/09/2013 15:00:00";
// var then = "02/09/2013 14:20:30";

// 
// outputs: "48:39:30"
class ParkingStatus extends Component {
    constructor(props){
        super(props);
       this.state= {
        inputValue: '',
        statusCardVisible: false,
        parkingStatus: [],
        parkingSpot:[],
        startTimeOfParking: ''
       };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);

    }
    updateInputValue(event) {
        this.setState({
          inputValue: event.target.value
        });
      }
    timeDifference(nowTime, startTime){
        let ms = moment(nowTime,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]").diff(moment(startTime,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"));    
        let f = moment.utc(ms).format("HH:mm:ss.SSS");
        // let s = moment.duration(ms)
        //   let d = ms.format("hh:mm:ss");
        // //  let s = moment.utc(ms).format("HH:mm:ss.SSS");

        return f;

    }
    isParkingtimeExceeded(){

        let allowedTime = this.state.parkingSpot.map(x => x.allowedParkingTimeInMins).toLocaleString().substring(0,3).replace(',',' ');
        console.log('allowed time' + allowedTime);
        let startTime = this.state.parkingStatus.map(x => x.startTimeOfParking);
        console.log('startTime' + startTime);
        console.log(this.state.parkingStatus)
        let nowTime = moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        
        console.log('nowTime'+ (nowTime));
        console.log('time diff  '+this.timeDifference(nowTime, startTime))

        if( this.timeDifference(nowTime, startTime) >= allowedTime){
            
            return this.timeDifference(nowTime, startTime);
        }else
        return 0;
    }
    handleSubmit(event) {
        
        this.setState({statusCardVisible: true});
         event.preventDefault();
      }
    getStatusApi(){
        axios.get(`http://localhost:5001/api/parkingStatusOfACarByREGO/${this.state.inputValue}`)
        .then(res => {
            const parkingStatus = res.data;
            this.setState({parkingStatus});
            
        })
        axios.get(`http://localhost:5001/api/parkingSpots/${this.state.parkingStatus.map(x => x.parkingSpotId)}`)
        .then(res => {
            const parkingSpot = res.data;
            this.setState({parkingSpot});
        })   
         
    }  
    render() {
        return (
            <Layout>
                <Jumbotron className={classes.jumbotronStyle}>
                    <h1>Check Your Parking Status here</h1>
                    <br />
                    <MDBContainer >
                        <MDBRow>
                            <MDBCol>
                                <form className={classes.statusForm} onSubmit={this.handleSubmit}>
                                    <p className="h4 text-center mb-4">Status Check</p>
                                    <label className=" my-input grey-text">
                                        Please enter your Registration number
                                    </label>
                                    <MDBInput
                                        type="text"
                                        id="my-input"
                                        placeholder= "enter your Registration Number"
                                        className="form-control"
                                        value={this.state.inputValue} 
                                        onChange={this.updateInputValue}
                                    />
                                    <br />
                                    <div className="text-center mt-4">
                                        <MDBBtn style={{backgroundColor:"indigo", color: 'white'}} type="submit">Check Status</MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </Jumbotron>
                {this.state.statusCardVisible? <MDBContainer className={classes.lifecycleContainer} fluid>
                    <MDBRow >
                        <MDBCol md="5">
                            <Card>
                                <Card.Header>
                                Registration Numer: <h2>{this.state.parkingStatus.map(x => x.parkedVehicleRego)}</h2>
                                </Card.Header>
                                <Card.Body>
                                Vehicle parked at: <strong>{this.state.parkingStatus.map(x => x.startTimeOfParking)} </strong>
                                <br/>
                                Allowed Parking Time: <strong>{this.state.parkingSpot.map(x => x.allowedParkingTimeInMins).toLocaleString().substring(0,3).replace(',',' ')} Mins</strong>
                                <p>{this.isParkingtimeExceeded()}</p>
                                </Card.Body>
                            </Card>
                        </MDBCol>
                        <MDBCol style={{ textAlign: 'left' }} md="5">
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> : null}
                <br/>
            </Layout>
        );
    }
}
export default ParkingStatus;