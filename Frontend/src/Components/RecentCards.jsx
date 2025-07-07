import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import TicketCards from './TicketCards';
const RecentCards = () => {
    const [recentTickets, setRecentTickets] = useState([]);

    useEffect(() => {
        async function fetchRecent() {
            try {
                const res = await axios.get('http://localhost:3000/get_Tickets');
                const sorted = res.data
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 4); 
                setRecentTickets(sorted);
            } catch (err) {
                console.error("Error fetching recent tickets:", err);
            }
        }

        fetchRecent();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Recent Tickets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentTickets.length > 0 ? (
                    recentTickets.map(ticket => (
                        <TicketCards key={ticket._id} ticket={ticket} />
                    ))
                ) : (
                    <p>No recent tickets found.</p>
                )}
            </div>
        </div>
    )
}

export default RecentCards
