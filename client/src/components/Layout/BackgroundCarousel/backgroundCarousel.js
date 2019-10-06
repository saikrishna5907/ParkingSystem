import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from '../BackgroundCarousel/backgroundCarousel.module.css';
import Carousel1 from '../../../assets/bgimg1.jpg';
import Carousel2 from '../../../assets/bgimg2.jpg';
import Carousel3 from '../../../assets/bgimg3.jpg';
import Aux from '../../../highOrderComponent/Aux';
import { MDBBtn, MDBRow, MDBContainer, MDBCol } from "mdbreact";
const styleClassName = "d-block w-100 " + classes.JmboStyle;

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};
const backgroundCarousel = (props) => (


  <Aux>
    <Carousel className={classes.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Carousel1}
          alt="First slide"
        />
        <br />
        <Carousel.Caption className={classes.captionStyle}>
          <MDBContainer className="classes.mdbCont">
            <MDBRow>
              <MDBCol md="6">
                <h1 style={{ color: 'black' }}>The solution for your Parking Problems</h1>
                <div>
                  <br />
                  <br />
                  <h3 style={{ color: 'black' }}>Register Here for the smart parking management</h3>
                </div>
                <br /><br />

                <MDBBtn size="lg" style={{ color: 'white', backgroundColor: '#1B4F72' }} href="/register">Register</MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel2}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  </Aux>
);

export default backgroundCarousel;