import React from "react"
import EmployeeList from "./EmployeeList"
import Header from "./Header"


export default function Homepage() {
    return (
        <div id="Homepage">
            <Header/>
            <EmployeeList/>
        </div>
    )
}