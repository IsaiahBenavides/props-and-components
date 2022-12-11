import React from "react"
import EmployeeList from "../components/EmployeeList"
import HomepageHeader from "../components/HomepageHeader"


export default function Homepage() {
    return (
        <div id="Homepage">
            <HomepageHeader/>
            <EmployeeList/>
        </div>
    )
}