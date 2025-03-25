export const ADMIN_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://politicalconsultancy-pegg.vercel.app/api/v1/adminroutes"  // Production endpoint
    : "http://localhost:8080/api/v1/adminroutes";  // Development endpoint
