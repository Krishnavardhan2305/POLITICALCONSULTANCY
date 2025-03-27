import * as clientService from "../services/adminServices.js";
import * as reviewServices from "../services/reviewServices.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../../.env') });
export const addClient = async (req, res) => {
    try {
        const { name, age, constituency, village, mobilenum, emailId, inPower,politicalparty } = req.body;
        if (!name || !age || !constituency || !mobilenum||!politicalparty) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        await clientService.addClient(name, age, constituency, village, mobilenum, emailId, inPower,politicalparty);
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.TO_USER,
            subject: "A New Client Added",
            text: `Hi,A new client ${name}  has been  added.`,
        });
        return res.status(201).json({
            message: "Client added successfully!",
            success: true
        });
    } catch (err) {
        console.error("Error adding client:", err);
        return res.status(500).json({ 
            success:false,
            message: "Error adding clients" 
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const adminData = await clientService.getadminInfo();
        const admin = adminData.find(admin => admin.email === email);

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined in environment variables.");
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }
        const tokenData = { userId: admin.id };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token, { 
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true, 
            sameSite: "strict" 
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            admin: { id: admin.id, email: admin.email }
        });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ 
            success: false,
            message: 'Error Logging In' 
        });
    }
};

export const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();

        if (!clients) {
            return res.status(404).json({
                success: false,
                message: "No clients found",
            });
        }

        return res.status(200).json({
            success: true,
            clients,
        });
    } catch (err) {
        console.error("Error fetching clients:", err);
        return res.status(500).json({
            success: false,
            message: "Error Getting Clients",
        });
    }
};

export const markAsDone = async (req, res) => {
    const { id } = req.params;

    try {
        await clientService.updateStatus(id);

        return res.status(200).json({
            success: true,
            message: "Client marked as done",
        });
    } catch (error) {
        console.error("Error Updating Status:", error);
        return res.status(500).json({
            success: false,
            message: "Error Updating Status",
        });
    }
};

export const deleteClient = async (req, res) => {
    const { id } = req.params;

    try {
        await clientService.removeClient(id);  
        return res.status(200).json({
            success: true,
            message: "Client deleted successfully",
        });
    } catch (error) {
        console.error("Error Deleting Client:", error);
        return res.status(500).json({
            success: false,
            message: "Error Deleting Client",
        });
    }
};

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: " Logged out succesfully"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// Controller to handle scheduling consultation
export const scheduleconsultation = async (req, res) => {
    try {
        const { name, age, constituency, village, mobilenum, emailId, inPower, timeSlot } = req.body;

        // Check required fields
        if (!name || !age || !constituency || !mobilenum || !timeSlot) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Call service function to insert client data
        await clientService.scheduleConsultation(name, age, constituency, village, mobilenum, emailId, inPower, timeSlot);
        
        return res.status(201).json({
            message: "Consultation scheduled successfully!",
            success: true,
        });
    } catch (error) {
        console.log("Error scheduling consultation:", error);
        return res.status(500).json({ message: "Failed to schedule a consultation", error: error.message });
    }
};


export const addreview = async (req, res) => {
    try {
        const reviews = req.body.reviews; // Receive the reviews array

        // Use for...of loop to handle async/await properly
        for (const review of reviews) {
            console.log("Processing review:", review);
            await addreview(review.review_text, review.username, review.position);
        }

        console.log("Received Reviews:", reviews);
        res.status(201).json({ message: "Reviews saved successfully!" });
    } catch (error) {
        console.error("Error adding reviews", error);
        return res.status(500).json({
            message: "Failed to add reviews",
            error: error.message,
        });
    }
};
