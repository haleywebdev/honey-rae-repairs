import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, set] = useState({})  // State variable for current ticket object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <section className="employee">
                <h4>{employee.name}</h4>
                <div className="employee__specialty">Specialities include: {employee.specialty}</div>
            </section>
        </>
    )
}
