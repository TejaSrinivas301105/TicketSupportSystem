import React, { useState, useEffect } from 'react';
import TicketHeader from '../Components/TicketHeader';
import TicketCards from '../Components/TicketCards';
import axios from 'axios';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        staggerChildren: 0.1,
        },
    },
    };

    const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    };

    const Tickets = () => {
    const [ticket, setTicket] = useState([]);
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState({
        search: '',
        priority: '',
        status: '',
    });

    useEffect(() => {
        async function fetchTickets() {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:3000/get_Tickets');
            setTicket(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
        }

        fetchTickets();
    }, []);

    const filteredTickets = ticket.filter((t) => {
        const matchSearch = filters.search.trim().toLowerCase();
        const match =
        t.subject?.toLowerCase().includes(matchSearch) ||
        t.description?.toLowerCase().includes(matchSearch) ||
        t.Name?.toLowerCase().includes(matchSearch);

        const priorityMatch = filters.priority
        ? t.priority?.toLowerCase().includes(filters.priority.toLowerCase())
        : true;

        const statusMatch = filters.status
        ? (t.status || 'Open') === filters.status
        : true;

        return match && priorityMatch && statusMatch;
    });

    return (
        <motion.div
        className="min-h-screen flex-col justify-center items-center py-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        >
        <motion.div variants={itemVariants}>
            <TicketHeader filters={filters} setFilters={setFilters} />
        </motion.div>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-5 mt-6"
            variants={containerVariants}
        >
            {loading && (
            <motion.h1 className="text-center col-span-full" variants={itemVariants}>
                Loading...
            </motion.h1>
            )}

            {!loading &&
            filteredTickets.map((query) => (
                <motion.div key={query._id} variants={itemVariants}>
                <TicketCards ticket={query} />
                </motion.div>
            ))}

            {!loading && filteredTickets.length === 0 && (
            <motion.p
                className="col-span-full text-center text-gray-500"
                variants={itemVariants}
            >
                No tickets found matching the filters.
            </motion.p>
            )}
        </motion.div>
        </motion.div>
    );
};

export default Tickets;



