import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import adminroutes from './routes/adminroutes.js';

const app = express();
dotenv.config();

app.use(express.json());

// Define allowed origins for CORS
const allowedOrigins = [
    "http://localhost:5173",  // Local development
    "https://politicalconsultancy-pegg.vercel.app"  // Production frontend on Vercel
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests if the origin is in the allowedOrigins array
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,  // Allow cookies and other credentials
};

// Apply CORS middleware with the defined options
app.use(cors(corsOptions));

// API routes
app.use('/api/v1/adminroutes', adminroutes);

const PORT = process.env.PORT || 8080;  // Use default port 8080 if not specified in .env
app.listen(PORT, () => {
    console.log(`Server Listening at port ${PORT}`);
});
