import { query } from "../init/db.js";

export const addClient = async (name, age, constituency, village, mobilenum, emailId, inPower, politicalparty) => {
    try {
        await query(
            `INSERT INTO clients (name, age, constituency, village, mobilenum, emailid, inpower, politicalparty, status, created_at, updated_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
            [name, age, constituency, village, mobilenum, emailId, inPower, politicalparty]
        );
    } catch (err) {
        console.error("Database insertion error:", err);
        throw err;
    }
};



export const getClients = async () => {
    try {
        const result = await query("SELECT * FROM clients");
        
        if (!result || !result.rows) {
            throw new Error("No clients data found");
        }
        // console.log(result);
        return result.rows; 
    } catch (err) {
        console.error("Error fetching clients:", err);
        throw new Error("Error fetching clients from database");
    }
};


export const getadminInfo = async () => {
    try {
        const { rows } = await query('SELECT * FROM admininfo');
        return rows;
    } catch (error) {
        console.error("Error fetching adminData:", error);
        throw error;
    }
};

export const updateStatus = async (id) => {
    try {
        await query(
            `UPDATE clients SET status = 'done', updated_at = CURRENT_TIMESTAMP WHERE id = $1`,
            [id]
        );
    } catch (error) {
        console.error("Error Updating Status:", error);
        throw error;
    }
};

export const removeClient = async (id) => {
    try {
        await query(`DELETE FROM clients WHERE id = $1`, [id]);
    } catch (error) {
        console.error("Error Deleting Client:", error);
        throw error;
    }
};

export const scheduleConsultation = async (name, age, constituency, village, mobilenum, emailId, inPower, timeSlot) => {
    try {
        await query(
            `INSERT INTO clients (name, age, constituency, village, mobilenum, emailid, inpower, timeslot, status, created_at, updated_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
            [name, age, constituency, village, mobilenum, emailId, inPower, timeSlot]
        );
    } catch (err) {
        console.error("Database insertion error:", err);
        throw err; // Throw the error to handle it in the calling function
    }
};