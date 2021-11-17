import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const TicketForm = () => {

    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    })

    const history = useHistory()

    // this is the object we want to send to the api

    const submitTicket = (evt) => {
        evt.preventDefault()
        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/serviceTickets", fetchOption)
            .then(() => {
                history.push("/tickets")
            })
    }

    return (
        <>
            <form className="ticketForm">
                <h2 className="ticketForm__title">New Service Ticket</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...ticket }
                                    copy.description = evt.target.value
                                    updateTicket(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="desription"
                            className="form-control"
                            placeholder="Brief description of problem"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Emergency:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...ticket }
                                    copy.emergency = evt.target.checked
                                    updateTicket(copy)
                                }}
                            type="checkbox"
                        />
                    </div>
                </fieldset>
                <button className="btn btn-primary" onClick={submitTicket}>
                    Submit Ticket
                </button>
            </form>
        </>
    )
}
