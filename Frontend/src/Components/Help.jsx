
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Help = () => {
  return (
    <motion.div
      className="min-h-screen bg-base-200 p-6 flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="navbar bg-base-100 shadow-md px-4 mb-4"
        variants={childVariants}
      >
        <a href="/DashBoard" className="btn btn-ghost text-md flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to DashBoard
        </a>
      </motion.div>

      <motion.div
        className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6"
        variants={childVariants}
      >
        <motion.h1
          className="text-3xl font-bold text-primary text-center"
          variants={childVariants}
        >
          Help & Support Guide
        </motion.h1>

        <motion.p className="text-lg text-gray-700" variants={childVariants}>
          Welcome to the Ticket Support System! Here's how you can get help when you need it:
        </motion.p>

        <motion.ol
          className="list-decimal list-inside space-y-3 text-gray-800"
          variants={childVariants}
        >
          <li>
            <strong>Create a Ticket:</strong> Go to the{" "}
            <span className="text-primary font-semibold">"Support"</span> section and click on{" "}
            <span className="badge badge-outline badge-primary">New Ticket</span>. Fill in the issue
            details and submit.
          </li>
          <li>
            <strong>Track Your Ticket:</strong> After submission, your ticket will appear in the{" "}
            <span className="text-primary font-semibold">"My Tickets"</span> section. You can view the
            status and updates there.
          </li>
          <li>
            <strong>Respond to Support:</strong> If support staff replies, you’ll be notified. Open the
            ticket and use the reply box to continue the conversation.
          </li>
          <li>
            <strong>Close the Ticket:</strong> Once your issue is resolved, you can mark the ticket as{" "}
            <span className="badge badge-success">Closed</span>.
          </li>
        </motion.ol>

        <motion.div className="alert alert-info mt-6" variants={childVariants}>
          💡 <span>If your issue is urgent, please mark the ticket as <strong>High Priority</strong> when submitting.</span>
        </motion.div>

        <motion.p className="text-center text-sm text-gray-500" variants={childVariants}>
          Still need help? Contact our support team directly at{' '}
          <a href="mailto:support@example.com" className="link link-primary">
            support@example.com
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Help;
