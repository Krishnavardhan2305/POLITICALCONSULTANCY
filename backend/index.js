import express from 'express';
import cors from "cors";
import dotenv from "dotenv"
import adminroutes from './routes/adminroutes.js'
const app=express();
dotenv.config();


app.use(express.json()); 
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));

app.use('/api/v1/adminroutes',adminroutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Listening at port ${PORT}`)
})
