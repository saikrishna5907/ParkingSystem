import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Layout from '../../components/Layout/Layout';
import classes from '../Register/register.module.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            studentId: '',
            carRego: '',
            emailId: '',
            phone: '',
            modal: false,
            postResponse: ''

        };

    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    //input change handlers
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    //input submit handler
    handlerSubmit = () => {
        this.toggle();
        axios.post(`http://localhost:5001/api/students`, this.state)
            .then(function (response) {
                this.setState({postResponse: 'Registration Success!'});
                console.log(response);
            })
            .catch(function (error) {
                this.setState({postResponse: error});
            });
        ;

    }
    render() {
        return (
            <Layout>
                <Jumbotron className={classes.jumbotronStyle}>
                    <MDBContainer style={{ width: '40%' }}>
                        <MDBRow className="form-row">
                            <MDBCol >
                                <form onSubmit={this.handlerSubmit}>
                                    <h1 className="text-center mb-4">Sign up</h1>
                                    <div className="grey-text">
                                        <div>
                                            <label >FirstName</label>
                                            <MDBInput
                                                value={this.state.firstName}
                                                onChange={this.handleChange}
                                                size="lg"
                                                name="firstName"
                                                className="form-control"
                                                id="validationCustom012"
                                                required
                                                type="text"
                                            />
                                            <div style={{ color: 'red' }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div>
                                            <label >Last Name</label>
                                            <MDBInput
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                                size="lg"
                                                name="lastName"
                                                className="form-control"
                                                id="validationCustom013"
                                                required
                                                type="text"
                                            />

                                            <div style={{ color: 'red' }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div>
                                            <label >Student ID</label>
                                            <MDBInput
                                                value={this.state.studentId}
                                                onChange={this.handleChange}
                                                size="lg"
                                                name="studentId"
                                                className="form-control"
                                                id="validationCustom014"
                                                required
                                                type="text"
                                            />
                                            <div style={{ color: 'red' }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div>
                                            <label >Registration Number</label>
                                            <MDBInput
                                                value={this.state.carRego}
                                                onChange={this.handleChange}
                                                size="lg"
                                                name="carRego"
                                                className="form-control"
                                                id="validationCustom015"
                                                required
                                                type="text"
                                            />
                                            <div style={{ color: 'red' }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div>
                                            <label >Email ID</label>
                                            <MDBInput
                                                value={this.state.emailId}
                                                onChange={this.handleChange}
                                                size="lg"
                                                name="emailId"
                                                className="form-control"
                                                id="validationCustom016"
                                                required
                                                type="text"
                                            />
                                            <div style={{ color: 'red' }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                        <div>
                                            <label >Phone Number</label>
                                            <MDBInput
                                                value={this.state.phone}
                                                onChange={this.handleChange}
                                                size="lg"
                                                name="phone"
                                                className="form-control"
                                                id="validationCustom017"
                                                required
                                                type="text"
                                            />
                                            <div style={{ color: 'red' }}>
                                                {this.state.firstNameError}
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <MDBBtn style={{ backgroundColor: '#3F729B' }} type="submit">Register</MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBContainer>
                    <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
                            <MDBModalBody>
                                
                                                </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary">Save changes</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>
                </Jumbotron>
            </Layout>
        );
    }
}
export default Register;