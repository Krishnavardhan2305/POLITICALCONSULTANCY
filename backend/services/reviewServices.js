import { query } from "../init/db.js";

export const addreview = async (review_text, username, position) => {
    try {
        const result = await query(
            "INSERT INTO review (review_text, username, position) VALUES ($1, $2, $3) RETURNING *",
            [review_text, username, position]
        );

        console.log("Review added successfully:", result.rows[0]); 
        // return result.rows[0]; 
    } catch (error) {
        console.error("Error adding review:", error);
        throw new Error("Database error while adding review"); 
    }
};
