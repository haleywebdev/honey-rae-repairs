// when you change the URL with JS, the browser broadcasts and event that the URL was changed.
// now implement another component to listen for that event and display the appropriate component. 
// this is done in ApplicationViews.js

// the routes in here are listening for the event. 

// ApplicationViews is a controller component. 

import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/serviceTickets">
                <TicketList />
            </Route>
        </>
    )
}
