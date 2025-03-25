import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_API_ENDPOINT } from "../utils/constant";
import { LogOut } from "lucide-react";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const AdminDashboard = () => {
    const [clientsData, setClientsData] = useState([]);
    const navigate = useNavigate();
    const dispatch=useDispatch()
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get(`${ADMIN_API_ENDPOINT}/clients`, { withCredentials: true });
                setClientsData(response.data.clients);
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        };
        fetchClients();
    }, []);

    const markAsDoneHandler = async (id) => {
        try {
            await axios.put(`${ADMIN_API_ENDPOINT}/markasdone/${id}`, {}, { withCredentials: true });
            setClientsData((prevClients) =>
                prevClients.map((client) =>
                    client.id === id ? { ...client, status: "done", updated_at: new Date().toISOString() } : client
                )
            );
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const LogOutHandler = async () => {
        try {
            dispatch(logout()); 
            await axios.get(`${ADMIN_API_ENDPOINT}/logout`);
            navigate("/");
            toast.success("Logout Successful");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-slate-900 text-white w-full">
            {/* Navbar */}
            <div className="w-full bg-gray-800 py-4 px-8 flex justify-between items-center shadow-md">
                <Link className="text-3xl font-bold flex items-center">
                    <span className="text-blue-500 hover:scale-110 transition-transform">JKR</span>
                    <span className="ml-2 hover:scale-110 transition-transform">CONSULTANCY</span>
                </Link>
                <div className="flex gap-6">
                    <Link to="/reviews" className="hover:text-blue-400 transition">Reviews</Link>
                    <Link className="hover:text-red-400 transition" onClick={LogOutHandler}>Logout</Link>
                </div>
            </div>

            {/* Table Container */}
            <div className="mt-10 p-4 w-full bg-gray-800 rounded-lg shadow-lg overflow-x-auto">
                <h2 className="text-2xl font-semibold text-center mb-4">Clients Info</h2>

                {clientsData.length > 0 ? (
                    <table className="w-full table-auto border-collapse border border-gray-700 text-sm text-left">
                        <thead>
                            <tr className="bg-gray-700 text-white">
                                {["ID", "Name", "Age", "Constituency", "Village", "Mobile", "Email", "In Power", "Status", "Created At", "Updated At", "Actions", "Time Slot", "Political Party"].map((header, index) => (
                                    <th key={index} className="border border-gray-600 px-4 py-2 text-center font-semibold">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {clientsData.map((client) => (
                                <tr key={client.id} className="hover:bg-gray-600 text-gray-300">
                                    <td className="border border-gray-600 px-2 py-2 text-center">{client.id}</td>
                                    <td className="border border-gray-600 px-2 py-2 truncate">{client.name}</td>
                                    <td className="border border-gray-600 px-2 py-2 text-center">{client.age}</td>
                                    <td className="border border-gray-600 px-2 py-2 truncate">{client.constituency}</td>
                                    <td className="border border-gray-600 px-2 py-2 truncate">{client.village}</td>
                                    <td className="border border-gray-600 px-2 py-2 truncate">{client.mobilenum}</td>
                                    <td className="border border-gray-600 px-2 py-2 truncate">{client.emailid}</td>
                                    <td className="border border-gray-600 px-2 py-2 text-center">{client.inpower ? "Yes" : "No"}</td>
                                    <td className={`border border-gray-600 px-2 py-2 text-center ${client.status === "done" ? "text-green-500 font-semibold" : "text-yellow-500 font-semibold"}`}>
                                        {client.status}
                                    </td>
                                    <td className="border border-gray-600 px-2 py-2 text-center">
                                        {new Date(client.created_at).toLocaleString()}
                                    </td>
                                    <td className="border border-gray-600 px-2 py-2 text-center">
                                        {new Date(client.updated_at).toLocaleString()}
                                    </td>
                                    <td className="border border-gray-600 px-2 py-2 flex gap-2 justify-center">
                                        {client.status !== "done" ? (
                                            <button
                                                onClick={() => markAsDoneHandler(client.id)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
                                            >
                                                Mark as Done
                                            </button>
                                        ) : (
                                            <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded">Done</button>
                                        )}
                                    </td>
                                    <td className="border border-gray-600 px-2 py-2 truncate font-bold text-blue-500">
                                        {client.timeslot}
                                    </td>
                                    <td className="border border-gray-600 px-2 py-2 truncate font-bold text-blue-500">
                                        {client.politicalparty}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-300 text-center">No clients found.</p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
