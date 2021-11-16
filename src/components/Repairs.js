
// This is the main component.

import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketList } from "./serviceTickets/TicketList";

export const Repairs = () => {

//Render the customer, employee list.
    return (

        <>
            <h1>Honey Rae's Repair Shop</h1>

            <h2>Customer's List</h2>
            <CustomerList />

            <h2>Employee's List</h2>
            <EmployeeList />

            <h2>Service Tickets</h2>
            <TicketList />
        </>
    )
}