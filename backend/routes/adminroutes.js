import express from "express";
import { getClients, addClient, login,markAsDone, deleteClient, logout, scheduleconsultation, addreview } from "../controllers/adminController.js";
const router = express.Router();
router.post("/clients", addClient);
router.get("/clients", getClients);
router.post("/login", login);
router.put("/markasdone/:id", markAsDone);
router.delete("/delete/:id", deleteClient);
router.route("/logout").get(logout);
router.route("/scheduleconsultation").post(scheduleconsultation);
router.route("/selectreviews").post(addreview);

export default router;