import { BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

function Header() {
    return (
        <motion.div
        className="bg-[#fef1e6] p-6 rounded-xl shadow-md mx-4 md:mx-6 mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        >
        <div className="flex items-center justify-between">
            <div>
            <div className="flex items-center gap-2 text-neutral-800 mb-1">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
            </div>
            <p className="text-sm text-neutral-600">Monitor the customer queries and their problems</p>
            </div>
        </div>
        </motion.div>
    );
}

export default Header;
