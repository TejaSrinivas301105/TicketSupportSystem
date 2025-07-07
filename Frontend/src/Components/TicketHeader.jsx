import React from 'react';
import { Search, ArrowLeft, Plus } from 'lucide-react';

const TicketHeader = ({ filters, setFilters }) => {
    return (
        <div className='mb-4 bg-base-200'>
            <div className="navbar bg-base-100 shadow-md px-4 mb-4 flex items-center justify-between">
                <a href="/DashBoard" className="btn btn-ghost text-md flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Dashboard
                </a>
                <a className="btn btn-ghost text-md flex items-center gap-2" href='/NewTickets'>
                    <Plus className='text-blue-500' /> New Ticket
                </a>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-base-100 rounded-xl shadow-lg">
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search the ticket you want"
                            value={filters.search}
                            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                            className="input input-bordered w-full pl-10"
                        />
                    </div>

                    <div className="w-full md:w-1/4">
                        <select
                            value={filters.priority}
                            onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
                            className="select select-bordered w-full"
                        >
                            <option value="">All Priorities</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/4">
                        <select
                            value={filters.status}
                            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                            className="select select-bordered w-full"
                        >
                            <option value="">All Status</option>
                            <option value="Opened">Opened</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketHeader;



