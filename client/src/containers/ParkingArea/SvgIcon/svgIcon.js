import React, { Component } from 'react';
import classes from '../SvgIcon/svgIcon.module.css';
class SvgIcon extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        let perc = this.props.percentage + '%';
        console.log(perc)
        return (
            
            <svg className={classes.svgStyle} width="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 194 186" preserveAspectRatio="xMidYMid meet">

                <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" y2="0">
                    <stop offset="0%" stopOpacity="1" stopColor="green" />
                    <stop offset={perc} stopOpacity="0.7" stopColor="green" />
                    <stop offset={perc} stopOpacity="1" stopColor="red" />
                    <stop offset="0%" stopOpacity="0.7" stopColor="red" />
                </linearGradient>


                <rect className={classes.spotsSvg} fill="url(#linear-gradient)" x="50" y="20" rx="20" ry="20" width="40%" height="150" />
            </svg>
        );
    }
}
export default SvgIcon;