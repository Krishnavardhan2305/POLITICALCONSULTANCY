import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import adminroutes from './routes/adminroutes.js';

const app = express();
dotenv.config();

// Allow JSON payloads in request bodies
app.use(express.json());

// Define allowed origins for CORS
const allowedOrigins = [
    "http://localhost:5173",  // Local development frontend
    "https://politicalconsultancy-pegg.vercel.app"  // Production frontend on Vercel
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests if the origin is in the allowedOrigins array or if origin is undefined (like in Postman)
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            console.error(`CORS blocked request from origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,  // Allow cookies and other credentials
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// API routes
app.use('/api/v1/adminroutes', adminroutes);

// Start server on specified PORT from .env, fallback to 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server Listening at port ${PORT}`);
});
