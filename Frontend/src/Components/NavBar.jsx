import React, { useState } from 'react';
import {
    Menu, X, House, Ticket, Plus,
    ChartNoAxesCombined, BadgeQuestionMark
} from 'lucide-react';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar bg-gray-900 text-amber-100 shadow-md px-4 sticky top-0 z-50 h-20">
        <div className="navbar-start">
            <a href="/DashBoard" className="btn btn-ghost text-xl font-bold">TicketVersion</a>
        </div>

        <div className="navbar-center hidden lg:flex gap-2">
            <a className="btn btn-ghost" href='/DashBoard'><House className='size-4' /> Dashboard</a>
            <a className="btn btn-ghost" href='/Tickets'><Ticket className='size-4' /> Tickets</a>
            <a className="btn btn-ghost" href='/NewTickets'><Plus className='size-4' /> New Ticket</a>
        </div>


        <div className="navbar-end hidden lg:flex gap-2">
            <a className="btn btn-ghost" href='/HelpUs'><BadgeQuestionMark className='size-4' /> Help</a>
            <a className="btn btn-ghost" href='/Report'><ChartNoAxesCombined className='size-4' /> Report</a>
            <a className="btn btn-ghost text-red-400" href='/Login'>Logout</a>
        </div>


        <div className="lg:hidden navbar-end">
            <button onClick={() => setOpen(!open)} className="btn btn-ghost">
            {open ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>


        {open && (
            <div className="absolute top-[64px] left-0 w-full bg-gray-800 text-white flex flex-col items-center gap-2 py-4 border-t border-gray-700 z-50 shadow-lg lg:hidden">
            <a className="btn btn-ghost w-11/12 text-left" href='/DashBoard'><House className='size-4' /> Dashboard</a>
            <a className="btn btn-ghost w-11/12 text-left" href='/Tickets'><Ticket className='size-4' /> Tickets</a>
            <a className="btn btn-ghost w-11/12 text-left" href='/NewTickets'><Plus className='size-4' /> New Ticket</a>
            <a className="btn btn-ghost w-11/12 text-left" href='/HelpUs'><BadgeQuestionMark className='size-4' /> Help</a>
            <a className="btn btn-ghost w-11/12 text-left" href='/Report'><ChartNoAxesCombined className='size-4' /> Report</a>
            <a className="btn btn-ghost w-11/12 text-left text-red-400" href='/Login'>Logout</a>
            </div>
        )}
        </div>
    );
};

export default NavBar;

