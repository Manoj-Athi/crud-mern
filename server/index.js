import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './connectDB.js';
import patientsRoutes from './routes/patientsRoutes.js';

// Configure .env
dotenv.config()

// Connect Database
connectDB()

// Iniatilse express app
const app = express()


// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// initialize cors
app.use(cors());

// Routes
app.use('/patients/', patientsRoutes);

// Declare PORT
const PORT = process.env.PORT || 5001

// Start the server
app.listen(
    PORT, 
    console.log(`Server running on port ${PORT}`)
)
