import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './connectDB.js';
import patientsRoutes from './routes/patientsRoutes.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/patients", patientsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});