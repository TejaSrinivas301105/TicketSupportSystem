import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

    const STATUS_COLORS = {
    Open: '#FFA500',           // Orange
    'In Progress': '#00BFFF',  // DeepSkyBlue
    Resolved: '#28a745',       // Green
    Pending: '#FFBB28',        // Yellow
    Unknown: '#999999'         // Fallback
    };

    const Report = () => {
    const [monthlyData, setMonthlyData] = useState([]);
    const [statusData, setStatusData] = useState([]);
    const [totalTickets, setTotalTickets] = useState(0);

    useEffect(() => {
        async function fetchData() {
        try {
            const res = await axios.get('http://localhost:3000/get_Tickets');
            const tickets = res.data || [];

            // Aggregate monthly data
            const monthlyMap = {};
            tickets.forEach(ticket => {
            const date = new Date(ticket.createdAt || ticket.date);
            const key = `${date.getFullYear()}-${date.getMonth()}`; // "YYYY-M"
            monthlyMap[key] = (monthlyMap[key] || 0) + 1;
            });

            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const monthlyCounts = Object.entries(monthlyMap).map(([key, count]) => {
            const [year, month] = key.split('-');
            return {
                name: `${monthNames[month]} ${year}`,
                Tickets: count
            };
            }).sort((a, b) => new Date(a.name) - new Date(b.name));

            // Aggregate status data
            const statusCounts = tickets.reduce((acc, ticket) => {
            const status = ticket.status || 'Unknown';
            acc[status] = (acc[status] || 0) + 1;
            return acc;
            }, {});
            const pieData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

            setMonthlyData(monthlyCounts);
            setStatusData(pieData);
            setTotalTickets(tickets.length);
        } catch (err) {
            console.error('Error fetching report data:', err);
        }
        }

        fetchData();
    }, []);

    return (
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-base-200 p-6"
        >
            <div className="navbar bg-base-100 shadow-md px-4 mb-4">
                <a href="/DashBoard" className="btn btn-ghost text-md flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to DashBoard
                </a>
            </div>
        <motion.h1
            className="text-3xl font-bold mb-6 text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
        >
            Performance Report
        </motion.h1>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
        >
            {/* Bar Chart */}
            <motion.div
            className="bg-white rounded-xl shadow-lg p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            >
            <h2 className="text-xl font-semibold mb-4">Tickets per Month</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Tickets" fill="#6366f1" />
                </BarChart>
            </ResponsiveContainer>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
            className="bg-white rounded-xl shadow-lg p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            >
            <h2 className="text-xl font-semibold mb-4">Ticket Status Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                <Pie
                    data={statusData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                >
                    {statusData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={STATUS_COLORS[entry.name] || '#8884d8'}
                    />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
                </PieChart>
            </ResponsiveContainer>
            </motion.div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold">Total Tickets</h3>
            <p className="text-2xl font-bold text-primary">{totalTickets}</p>
            </div>
            {statusData.map((d, i) => (
            <div
                key={i}
                className={`bg-white p-4 rounded-xl shadow-md text-center`}
                style={{ color: STATUS_COLORS[d.name] || '#555' }}
            >
                <h3 className="text-lg font-semibold">{d.name}</h3>
                <p className="text-2xl font-bold">{d.value}</p>
            </div>
            ))}
        </motion.div>
        </motion.div>
    );
};

export default Report;
