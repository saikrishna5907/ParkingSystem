import React from "react";
import { Route } from "react-router-dom";
import ParkingAreaComponent from './containers/ParkingArea/parkingArea';
import ParkingSpotComponent from './containers/ParkingSpots/parkingSpot';
import HomepageComponent from './components/Homepage/Homepage';
import ParkingStatus from "./containers/MyParkingStatus/parkingStatus";
import RegisterComponent from './containers/Register/Register';
const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={HomepageComponent} />
      <Route exact path="/parkingArea" component={ParkingAreaComponent} />
      <Route path="/parkingSpotsInParticularArea/:name" component={ParkingSpotComponent} />
      <Route path="/myParkingStatus" component={ParkingStatus} />
      <Route path="/register" component={RegisterComponent} />

      {/* <Route path="/parkingArea/:id" component={ParkingSpotComponent} /> */}
      

    </div>
  )
}

export default Routes;