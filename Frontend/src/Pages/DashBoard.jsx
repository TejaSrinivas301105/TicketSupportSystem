import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import data from 'daisyui'
import Header from '../Components/Header'
import RecentCards from '../Components/RecentCards'
import Cards from '../Components/Cards'
import axios from 'axios'
import { motion } from 'framer-motion'
const DashBoard = () => {
    data.theme = 'caramellatte';
    const [ticket,settickets] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/get_Tickets')
            .then(res => settickets(res.data))
            .catch(err => console.error(err));
    },[])
    return (
        <motion.div
            className='min-h-screen bg-base-200 h-full'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <NavBar />
            <Header />
            <Cards tickets={ticket} />
            <RecentCards />
        </motion.div>
    )
}

export default DashBoard
