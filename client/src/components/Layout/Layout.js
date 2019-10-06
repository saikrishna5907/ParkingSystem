import React from 'react';
import Aux from '../../highOrderComponent/Aux';
import NavbarComponent from './Navbar/Navbar';
import FooterComponent from './Footer/Footer';
import classes from '../Layout/Layout.module.css';
const layout = (props) => (
    <Aux>
        <NavbarComponent/>
        <br/>
        
        <main className= {classes.Content}>
            {props.children}
        </main>
        <FooterComponent />

    </Aux>
);

export default layout;