import React, { useEffect, useState } from 'react';
import TicketCards from '../Components/TicketCards';
import axios from 'axios';
import { useParams } from 'react-router';
import toast from 'react-hot-toast';
import MessageResponse from '../Components/MessageResponse';
import { ArrowLeft } from 'lucide-react';
    const TicketResponse = () => {
    const [ticket, setTicket] = useState(null);
    const [newStatus, setNewStatus] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchTicketById = async () => {
        try {
            const res = await axios.get(`https://ticketsupportsystem-rmo0.onrender.com/get_Tickets/${id}`);
            setTicket(res.data);
            setNewStatus(res.data.status);
        } catch (error) {
            console.error('Error while getting ticket by ID', error);
            toast.error('Error while getting ticket!');
        }
        };

        fetchTicketById();
    }, [id]);

    const handleStatusUpdate = async () => {
        try {
        await axios.put(`https://ticketsupportsystem-rmo0.onrender.com/get_Tickets/${id}/status`, {
            status: newStatus
        });
        toast.success('Status updated successfully!');
        setTicket((prev) => ({ ...prev, status: newStatus }));
        } catch (error) {
        console.error('Error updating status', error);
        toast.error('Failed to update status');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4">
            <div className="navbar bg-base-100 shadow-md px-4 mb-4">
                <a href="/DashBoard" className="btn btn-ghost text-md flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to DashBoard
                </a>
            </div>
        {ticket ? (
            <div className="w-full max-w-xl space-y-6">
            <TicketCards ticket={ticket} />
            <MessageResponse ticket={ticket} />

            <div className="bg-base-100 shadow-lg rounded-xl p-4 border space-y-4">
                <h2 className="text-xl font-semibold">Update Ticket Status</h2>
                <select
                className="select select-bordered w-full"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Pending">Pending</option>
                </select>
                <button
                className="btn btn-primary w-full"
                onClick={handleStatusUpdate}
                >
                Update Status
                </button>
            </div>
            </div>
        ) : (
            <h1>Loading Ticket...</h1>
        )}
        </div>
    );
};

export default TicketResponse;



