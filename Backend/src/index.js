import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import TicketRouter from './Routes/TicketsRoutes.js'
import AuthRouter from './Routes/AuthRouter.js'
import cors from 'cors'
dotenv.config();

const app = express();
const port = 3000;
const allowedOrigins = [
  'http://localhost:5173',
  'https://graceful-mooncake-f9b332.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json()); // Middleware to parse JSON bodies

app.use(express.urlencoded({ extended: true }));

app.use('/Auth',AuthRouter)
app.use('/get_Tickets',TicketRouter)


connectDB();

app.listen(port,()=>{
    console.log(`Server is running on the port http://localhost:${port}`)
})


