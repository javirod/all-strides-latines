import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3001
app.use(express.json());
app.use(cors());

dotenv.config();
mongoose.connect(process.env.URI);

app.listen(port, () => console.log("SERVER STARTED"));