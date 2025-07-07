import { Link } from 'react-router'; 
import React from 'react';
import { User2, Clock3 } from 'lucide-react';

    const priorityLabels = {
    High: 'High ',
    Medium: 'Medium ',
    Low: 'Low'
    };

    const statusColors = {
    Opened: 'bg-blue-100 text-blue-800',
    Progress: 'bg-yellow-100 text-yellow-800',
    Resolved: 'bg-green-100 text-green-800',
    Closed: 'bg-gray-100 text-gray-700'
    };

    const priorityColors = {
    High: 'bg-orange-100 text-orange-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-green-100 text-green-800'
    };

    const TicketCards = ({ ticket }) => {
    if (!ticket) return null;

    return (
        <Link to={`/Tickets/${ticket._id}`} className="block">
        <div className="shadow-md rounded-xl p-5 w-full max-w-xl transition hover:shadow-lg border border-gray-200 bg-white ">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span className="font-medium text-gray-700">
                #{ticket._id?.slice(-6) || "TKT-XXX"}
            </span>
            <div className="flex gap-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${priorityColors[ticket.priority] || 'bg-gray-100 text-gray-600'}`}>
                {priorityLabels[ticket.priority] || ticket.priority}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[ticket.status] || 'bg-blue-100 text-blue-800'}`}>
                {ticket.status || 'Opened'}
                </span>
            </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {ticket.subject || "No subject"}
            </h2>

            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {ticket.description || "No description provided"}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1">
                <User2 className="w-4 h-4" />
                <span>{ticket.Name || "Unknown"}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock3 className="w-4 h-4" />
                <span>{ticket.createdAt ? new Date(ticket.createdAt).toLocaleString() : "Just now"}</span>
            </div>
            </div>
        </div>
        </Link>
    );
};

export default TicketCards;



