
// This is the main component.

import { ApplicationViews } from "./ApplicationViews";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { NavBar } from "./nav/NavBar";
import { TicketList } from "./serviceTickets/TicketList";
import "./Repairs.css"

// Repairs is a container component.

export const Repairs = () => {

//Render the html
    return (

        <>
            <NavBar />
            <h1>Honey Rae's Repair Shop</h1>

            <ApplicationViews />

        </>
    )
}