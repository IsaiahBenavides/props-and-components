import React from "react";
import data from "../data";

export default function EmployeePageHeader(props) {
    let employee = null
    data.map((foundName) =>{
        const joinedName = foundName.name.split(" ").join("")
        const path = window.location.pathname
        if(`/employee/${joinedName}` === path){
            employee = foundName
            return employee
        }
    })
    return (
        <>
            <div id="Header">
                <h1>
                    Employee Information
                </h1>
                <h2>{employee.name}</h2>
            </div>
        </>
    )
}