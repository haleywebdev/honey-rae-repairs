import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const HiringForm = () => {

    const [employee, updateEmployee] = useState({
        name: "",
        specialty: ""
    })

    const history = useHistory()

    // this is the object we want to send to the api

    const submitForm = (evt) => {
        evt.preventDefault()
        const newForm = {
            name: employee.name,
            specialty: employee.specialty
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <>
            <form className="hiringForm">
                <h2 className="hiringForm">New Hire Application</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...employee }
                                    copy.name = evt.target.value
                                    updateEmployee(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="First and Last Name"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="specialty">Specialty:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...employee }
                                    copy.specialty = evt.target.value
                                    updateEmployee(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="specialty"
                            className="form-control"
                            placeholder="Technical Specialty"
                        />
                    </div>
                </fieldset>
                
                <button className="btn btn-primary" onClick={submitForm}>
                    Submit Application
                </button>
            </form>
        </>
    )
}