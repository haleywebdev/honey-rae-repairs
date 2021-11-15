// Basic react component that allows us to start using all of the features that come with react library.

import React, { useEffect, useState } from "react";


// In prior projects, we would declare a variable and set it's value to a key-value pair with an empty array or sometimes an empty object. 
// This is setting application state / temporary or transient state. it will store the data as the user is interacting with the web app.

// const database = {
//     customers: []
// }

// Defining a component and exporting it.

export const Repairs = () => {

    // Get a list of customers from the API 

    const [customers, setCustomers] = useState([]) // useState() is a function or hook in React. This returns an array.


    return (

        <>
            <h1>Honey Rae's Repair Shop</h1>
        </>
    )
}