import React from "react"
import data from "../data"

export default function EmployeeInfo(props) {
    let employee = null
    data.map((foundName) => {
        const joinedName = foundName.name.split(" ").join("")
        const path = window.location.pathname
        if (`/employee/${joinedName}` === path) {
            employee = foundName
            return employee
        }
    })
    return (
        <div className="EmployeeInfo">
            <img src={employee.profileIcon}></img>
            <h4>Name: {employee.name}</h4>
            <h4>Position: {employee.position}</h4>
            <h4>Phone: {employee.phone}</h4>
            <h4>Email: {employee.email}</h4>
        </div>
    )
}