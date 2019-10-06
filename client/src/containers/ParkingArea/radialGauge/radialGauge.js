import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import axios from 'axios';
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);
const chartConfigs = {
    type: 'angulargauge', // The gauge type
    width: '450', // Width of the gauge
    height: '250', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": `Parking Status  At Universty`,
            "lowerLimit": "0",
            "upperLimit": "100",
            "showValue": "1",
            "numberSuffix": "%",
            "theme": "fusion",
            "showToolTip": "0"
        },
        // Chart Data
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#F2726F"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#FFC533"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#62B58F"
            }]
        },
        "dials": {
            "dial": [{
                "value": "50"
            }]
        }
    }
}
class RadialGauge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartSettings: chartConfigs,
            parkingArea: [],
                        
        }
        console.log(props.percentage)
       
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/api/parkingAreasByName/${this.state.parkingAreaName}`)
        .then(res => {
            const parkingArea = res.data;
            this.setState({ parkingArea });
        });
        // this.arrangeValueFunc();
        // converting state to json then edit then again setState to update chart according to data 
            // this.state.parkingArea.map(x => {
            //     // this.setState({ fullPercentage: (x.noOfOccupiedSpots / x.totalParkingSpots) * 100 });
            //     this.setState({fullPercentageInArea  : (parseInt(x.noOfOccupiedSpots) / parseInt(x.totalParkingSpots)) * 100 });
            // });
        let stateToJson = JSON.parse(JSON.stringify(this.state.chartSettings));
        stateToJson['dataSource']['chart'].caption = this.props.parkingAreaName + ' Paking Status At University';
        
        console.log(stateToJson['dataSource']['dials']['dial'][0].value);
        // stateToJson['dataSource']['dials']['dial'][0].value = this.props.percentage;
        this.setState({
            chartSettings: {...stateToJson }
        })

    }

    render() {
       
        return (
            <ReactFC
                {...this.state.chartSettings} />
        );
    }
}
export default RadialGauge;