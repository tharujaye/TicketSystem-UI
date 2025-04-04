import { useEffect, useState } from "react";
import { getTickets, createTicket } from "../api/ticketService";

export default function Home() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        const data = await getTickets();
        setTickets(data);
    };

    const handleCreateTicket = async () => {
        const newTicket = { title: "Sample Ticket", description: "Description" };
        await createTicket(newTicket);
        fetchTickets(); // Refresh ticket list
    };

    return (
        <div>
            <h1>Tickets</h1>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket.id}>{ticket.title}</li>
                ))}
            </ul>
            <button onClick={handleCreateTicket}>Add Ticket</button>
        </div>
    );
}
