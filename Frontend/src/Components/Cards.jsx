import { Ticket,TicketCheck,TicketX,TicketPlus } from 'lucide-react';




const Cards = ({ tickets }) => {
    const total = tickets.length;

    const resolved = tickets.filter(t => t.status?.toLowerCase() === 'resolved').length;
    const pending = tickets.filter(t => t.status?.toLowerCase() === 'pending').length;
    const today = new Date().toDateString();
    const newTickets = tickets.filter(t => {
        const created = new Date(t.createdAt).toDateString();
        return created === today;
    }).length;

    const cardData = [
        { title: 'Total Tickets', count: total },
        { title: 'Resolved Today', count: resolved },
        { title: 'Pending Tickets', count: pending },
        { title: 'New Tickets', count: newTickets },
    ];
    return (
        <div className="p-4 grid  sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
        {cardData.map((card, index) => (
            <div
            key={index}
            className="card bg-base-100  shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl "
            >
            <div className="card-body flex flex-row justify-between items-center">
                <div>
                <h2 className="text-lg font-semibold text-base-content">{card.title}</h2>
                <p className="text-xl font-bold">{card.count}</p>
                </div>
                
                {
                    card.title === 'Total Tickets' ? <Ticket  className='size-6 text-blue-600'/> :
                    card.title === 'Resolved Today' ? <TicketCheck className='size-6 text-green-500' /> :
                    card.title === 'Pending Tickets' ? <TicketX  className='size-6 text-red-600' /> :
                    card.title === 'New Tickets' ? <TicketPlus  className='size-6 text-yellow-900'/> :
                    null
                }
            </div>
            </div>
        ))}
    </div>
    );
};

export default Cards;
