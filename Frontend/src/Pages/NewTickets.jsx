import React, { useState } from 'react';
import { ArrowLeft, Angry } from 'lucide-react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import axios from 'axios';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 90,       
            damping: 15,         
            when: "beforeChildren",
            staggerChildren: 0.05 
        }
    }
};


const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const NewTickets = () => {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [priority, setPriority] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [statas,setStatus] = useState("");
    const Navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!Name.trim() || !email.trim() || !subject.trim() || !priority.trim() || !category.trim() || !description.trim()) {
            toast.error('Please fill in all required details!');
            return;
        }

        try {
            await axios.post('https://ticketsupportsystem-rmo0.onrender.com/get_Tickets', {
                Name, email, subject, priority, category, statas, description
            });

            toast.success('Created successfully!');
            Navigate('/Tickets');
        } catch (e) {
            toast.error('Submission failed.');
            console.error(e);
            if (e.response?.status === 429) {
                toast.error('Slow down! Too many requests.', {
                    duration: 3000,
                    icon: <Angry />
                });
            }
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-base-200 h-full pb-4"
        >
            <motion.div className="navbar bg-base-100 shadow-sm px-4">
                <a href="/Tickets" className="btn btn-ghost text-md flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Tickets
                </a>
            </motion.div>

            <motion.div
                className="max-w-3xl mx-auto p-6 mt-4 bg-base-100 shadow-md rounded-xl"
                variants={containerVariants}
            >
                <motion.h1 className="text-2xl font-bold mb-4" variants={childVariants}>
                    Create New Ticket
                </motion.h1>

                <motion.form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <motion.div variants={childVariants}>
                        <label className="label font-medium">Customer Name *</label>
                        <input
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                            className="input input-bordered w-full"
                            required
                        />
                    </motion.div>

                    <motion.div variants={childVariants}>
                        <label className="label font-medium">Email Address *</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="input input-bordered w-full"
                            required
                        />
                    </motion.div>

                    <motion.div variants={childVariants}>
                        <label className="label font-medium">Subject *</label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Enter subject"
                            className="input input-bordered w-full"
                            required
                        />
                    </motion.div>

                    <motion.div variants={childVariants}>
                        <label className="label font-medium">Priority *</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="select select-bordered w-full"
                            required
                        >
                            <option disabled value="">Select priority</option>
                            <option value="High">High - Very Important</option>
                            <option value="Medium">Medium - Normal</option>
                            <option value="Low">Low - General</option>
                        </select>
                    </motion.div>

                    <motion.div variants={childVariants}>
                        <label className="label font-medium">Category *</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="" disabled>Select category</option>
                            <option value="Billing">Billing</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Sales">Sales</option>
                            <option value="Other">Other</option>
                        </select>
                    </motion.div>
                    <motion.div variants={childVariants}>
                        <label className="label font-medium">Status *</label>
                        <select
                            value={statas}
                            onChange={(e) => setStatus(e.target.value)}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="" disabled>Select category</option>
                            <option value="Billing">Opened</option>
                        </select>
                    </motion.div>

                    <motion.div variants={childVariants}>
                        <label className="label font-medium">Description *</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe the issue..."
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            required
                        />
                    </motion.div>

                    <motion.div
                        className="flex justify-end gap-4"
                        variants={childVariants}
                    >
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary px-6"
                        >
                            Submit Ticket
                        </motion.button>

                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-ghost bg-red-500 text-white"
                            onClick={() => {
                                setName(""); setEmail(""); setSubject("");
                                setPriority(""); setCategory(""); setDescription("");
                            }}
                        >
                            Clear
                        </motion.button>
                    </motion.div>
                </motion.form>
            </motion.div>
        </motion.div>
    );
};

export default NewTickets;



