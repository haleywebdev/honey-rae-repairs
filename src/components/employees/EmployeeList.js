import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    changeEmployee(employeeArray)
                })
        },
        []
    )

    return (
        <>

            <div>
                <button onClick={() => history.push("/employee/create")}>New Hire Application</button>
            </div>

            <h2>Employee List</h2>

            {
                employees.map(
                    (employee) => {
                        return <li key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></li>
                    }
                )
            }
        </>
    )
}