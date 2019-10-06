import React from 'react';
import BackgroundCarousel from '../Layout/BackgroundCarousel/backgroundCarousel';
import Layout from '../Layout/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import classes from '../Homepage/homepage.module.css';
import {Link} from 'react-router-dom';
import LifeCycleImage from '../../assets/homepageLifecycleImage.png'
const homePage = (props) => (
    <Layout>
   <BackgroundCarousel />
   <br/>
   <MDBContainer className={classes.jumbotronStyle} style={{align: 'center', backgroundcolor: '#CDE3F2'}}>
   <MDBRow >
     <MDBCol>
   {/* <Jumbotron > */}
  <div className={classes.descriptionDivStyle}>
    
    <h1 style={{color: '#EC5538'}}>Advantages of our Parking System</h1>
    <br /><br />
    <div className="descriptionP" >
      <div>
      <h3>Availability</h3>
        <h6>The parking management system allowes its users to find the parking spots available in the area.</h6>
      </div>
       
      <br /><br />
      <div>
      <h3>Easy Payments</h3>
        <h6>The system allowes its users to extend thier parking time by paying through online.</h6>
      </div>
    </div>
  </div>
{/* </Jumbotron> */}
</MDBCol>
</MDBRow>
</MDBContainer>     
    <MDBContainer className={classes.lifecycleContainer} fluid>
      <MDBRow >
        <MDBCol md="2">
          <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
           How it Works?
          </h5>
          <br/>
          <br/>
          <p style={{textAlign: 'left'}}>
            The sensor collects and sends the status of parking spot and capture the parked car information then sends the notifications to the registered users. The application also shows the directions to the nearest available parking spot.
          </p>
        </MDBCol>
        <MDBCol style= {{textAlign:'left' }} md="8">
        <img src={LifeCycleImage} className="img-fluid" alt="" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   </Layout>
);

export default homePage;