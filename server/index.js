
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

require('./src/config/config');
require('./src/models/db');
import parkingAreaRoutes from './src/routes/parkingAreaRoutes';
import studentRoutes from './src/routes/studentRoutes';
import parkingSpotRoutes from './src/routes/parkingSpotRoutes';
import parkingStatusRoutes from './src/routes/parkingStatusRoutes';
// import mongoose from 'mongoose';
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api',parkingAreaRoutes);
app.use('/api',parkingSpotRoutes);
app.use('/api',parkingStatusRoutes);
app.use('/api',studentRoutes);


app.listen(port, ()=> {
    console.log(`Server is running on port : ${port}`);
});