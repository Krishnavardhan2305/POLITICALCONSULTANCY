import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); 

const Authenticated = async (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authenticated, token missing"
            });
        }
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined in environment variables.");
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.id = decoded.userId;
            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token"
            });
        }

    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export default Authenticated;
