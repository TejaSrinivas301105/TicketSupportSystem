import React, { useState } from 'react';
import { Menu,House,Ticket,Plus,ChartNoAxesCombined,BadgeQuestionMark } from 'lucide-react'; // optional: install lucide-react for icons


const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar bg-gray-900 shadow-sm px-4 text-amber-100 ">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">TicketVersion</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a className="btn btn-ghost" href='/DashBoard'><House className='size-4' />Dashboard</a></li>
                <li><a className="btn btn-ghost" href='/Tickets'><Ticket className='size-4'/>Tickets</a></li>
                <li><a className="btn btn-ghost"href='/NewTickets'><Plus className='size-4'/>New Tickets</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                <a href='/HelpUs' className='btn btn-ghost'>
                    <BadgeQuestionMark className='size-4' />Help
                </a>
                <a className='btn btn-ghost' href='/Report'>
                    <ChartNoAxesCombined className='size-4'/>Report
                </a>
                <a className='btn btn-ghost' href='/Login'>LogOut</a>                
                <div className="lg:hidden">
                    <button onClick={() => setOpen(!open)} className="btn btn-ghost">
                        <Menu />
                    </button>
                </div>
            </div>

            {open && (
                <div className="absolute top-[64px] left-0 w-full bg-base-100 flex flex-col items-center border-t z-50 shadow-md lg:hidden">
                <a className="btn btn-ghost w-full text-center"><House className='size-4' />Dashboard</a>
                <a className="btn btn-ghost w-full text-center"><Ticket className='size-4'/>Tickets</a>
                <a className="btn btn-ghost w-full text-center"><Plus className='size-4'/>New Tickets</a>
                </div>
            )}
        </div>
    );
};

export default NavBar;

