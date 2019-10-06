import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import classes from '../Footer/footer.module.css';
const FooterComponent = (props) => (

    <MDBFooter style= {{backgroundColor:'#3E4551'}} className="page-footer font-small pt-4 mt-4">
    <MDBContainer fluid className="text-center text-md-left">
      <MDBRow className={classes.rowStyle}>
        <MDBCol md="10">
          <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
            Footer Content
          </h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
          </p>
        </MDBCol>
        <MDBCol style= {{textAlign:'left' }} md="2">
          <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
            Menu
          </h5>
          <ul className="list-unstyled">
            <li>
              <Link to="#!">Home</Link>
            </li>
            <li>
              <Link to="#!">Paring Area</Link>
            </li>
            <li>
              <Link to="#!">My Parking Status</Link>
            </li>
            <li>
              <Link to="#!">About</Link>
            </li>
            <li>
              <Link to="#!">Contact</Link>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    {/* <hr />
    <div className="text-center py-3">
      <ul className="list-unstyled list-inline mb-0">
        <li className="list-inline-item">
          <h5 className="mb-1">Register for free</h5>
        </li>
        <li className="list-inline-item">
          <Link to="#!" className="btn btn-danger btn-rounded">
            Sign up!
          </Link>
        </li>
      </ul>
    </div>
    <hr /> */}
    
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <Link to="#"> Parking Sytem </Link>
      </MDBContainer>
    </div>
  </MDBFooter>
);

export default FooterComponent;