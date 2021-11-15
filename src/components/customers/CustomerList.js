// Basic react component that allows us to start using all of the features that come with react library.

import React, { useEffect, useState } from "react";


// In prior projects, we would declare a variable and set it's value to a key-value pair with an empty array or sometimes an empty object. 
// This is setting application state / temporary or transient state. it will store the data as the user is interacting with the web app.

// const database = {
//     customers: []
// }

// Defining a component and exporting it.

export const CustomerList = () => {

    // Get a list of customers from the API 

    const [customers, setCustomers] = useState([]) // useState() is a function or hook in React. This returns an array.

    const [totalCustomerMessage, updateMessage] = useState("")

    // Think about what state you want this component to render. (useState())
    // Deconstruct the array it returns.
    // Define a variable to hold the state and a variable to hold the function to modify the state.
    // If the component needs data from the API, use a useEffect() with a function as the first argument and an empty array as a second. 
    // Use a fetch call to get it from the API.
    // On the final .then, invoke the function that the useState() function gave you to modify the state. 
    // We will then use that function to modify the HTML later.

    // This runs code when any state changes. It is like an event listener. 
    useEffect(
        () => {
            console.log("Initial useEffect")
            // get the data from the API and put it in customers
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

    // Only display a few customers and have a running total of the amount of customers.
    // Use 

    useEffect(
        () => {
            console.log("Customer state changed")
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            } 
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )


    // This function returns whatever the HTML will be generated in the browser. 
    // JSX is a type of language used for React that looks like HTML. 
    // It takes the JSX, converts it to JS code and then renders the HTML.

    return (

        // Returning whatever HTML we want to see in the browser. 

        // <> </> is a fragment, used because we can only return one element from our JSX.
        // so we put all of our elements inside the fragment :) 

        // You will iterate customer array and convert them from objects to HTML using JSX
        // Use interopolation without the $ in React.
        // Recall that a .map array method is a conversion tool

        <>

        <div>{totalCustomerMessage}</div>

            {
                customers.slice(0, 5).map(
                    (customerObj) => {
                        return <ul key={`customer--${customerObj.id}`}>{customerObj.name}</ul>
                    }
                )
            }
        </>
    )
}

// If you receive a bug like "Warning: Each child in a list should have a unique "key" prop."
// Be mindful that react uses the key attribute rather than a unique id attribute for internal rendering of the DOM. 
// https://reactjs.org/docs/lists-and-keys.html#keys