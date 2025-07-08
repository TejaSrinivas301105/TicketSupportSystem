import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import TicketRouter from './Routes/TicketsRoutes.js'
import AuthRouter from './Routes/AuthRouter.js'
import cors from 'cors'
dotenv.config();

const app = express();
const port = 3000;
app.use(cors({
  origin: ['https://graceful-mooncake-f9b332.netlify.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Preflight support
app.options('*', cors());


app.use(express.json()); // Middleware to parse JSON bodies

app.use(express.urlencoded({ extended: true }));

app.use('/Auth',AuthRouter)
app.use('/get_Tickets',TicketRouter)


connectDB();

app.listen(port,()=>{
    console.log(`Server is running on the port http://localhost:${port}`)
})


