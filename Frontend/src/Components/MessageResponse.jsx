import React, { useState } from 'react';
import { MessageSquare,Send } from 'lucide-react';
import toast from 'react-hot-toast'
const MessageResponse = ({ ticket }) => {
    const [message, setMessage] = useState("");

    if (!ticket) return <div>Loading...</div>;

    async function handleResponse(e) {
        e.preventDefault();
        if (!message.trim()) return toast.error("Message cannot be empty!");

        try {
            toast.success("Response sent to the user!");
            setMessage("");
        } catch (err) {
            console.error("Error sending response:", err);
            toast.error("Failed to send response.");
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                <MessageSquare className="text-gray-700" />
                Messages
            </div>
            <div className="border-l-4 border-blue-500 bg-gray-50 p-3 mb-4 rounded-md">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800">{ticket.Name || "User"}</span>
                    <span className="text-sm text-gray-500">
                        {ticket.createdAt ? new Date(ticket.createdAt).toLocaleTimeString() : "Just now"}
                    </span>
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                    {ticket.description || "No description provided."}
                </p>
            </div>
            <div className="border-l-4 border-green-500 bg-gray-50 p-3 mb-4 rounded-md">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800">Support Agent</span>
                    <span className="text-sm text-gray-500">Just now</span>
                </div>
                <p className="text-sm text-gray-700">
                    Thank you for contacting us. We're looking into this issue and will get back to you shortly.
                </p>
            </div>
            <div className="mt-4">
                <textarea
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e)=>{
                        setMessage(e.target.value)
                    }}
                />
                <button onClick={handleResponse} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer">
                    <Send className='size-4'/>
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default MessageResponse;
