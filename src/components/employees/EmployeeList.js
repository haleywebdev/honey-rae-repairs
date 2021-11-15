import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecialty] = useState("")

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

    useEffect(
        () => {
            const specialtyObj = employees.map(emp => emp.specialty)
            setSpecialty(specialtyObj.join(", "))
        },
        [employees])


    return (
        <>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}