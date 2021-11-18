import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"
import "./Tickets.css"

// For each service ticket, we want to display
// 1. The description of the service ticket.
// 2. Name of the customer.
// 3. Name of the employee doing the repair.
// 4. Date completed, if it's there.

// To display all of this information in a single fetch request, 
// 1. Get the URL from the api in the browser.
// 2. The .map method will only show one type of information.
// 3. It must be augmented using a JSON server feature 
// 4. Use the browser link and augment 
// 5. Example: http://localhost:8088/serviceTickets?_expand=employee&_expand= ... 
// 6. Paste the new, augmented link in the fetch function


export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((ticketsArray) => {
                    updateTickets(ticketsArray)
                })
        },
        []
    )

    return (
        <>

            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>

            {
                tickets.map(
                    (ticket) => {
                        return <>
                            
                            <p className={ticket.emergency ? `emergency` : `ticket`}>
                                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>

                        </>

                    }
                )
            }
        </>
    )
}
