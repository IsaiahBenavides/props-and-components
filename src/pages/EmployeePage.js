import EmployeePageHeader from "../components/EmployeePageHeader";
import React from "react";
import data from "../data";
import EmployeeInfo from "../components/EmployeeInfo";
import { Link } from "react-router-dom";

export default function EmployeePage() {
    return (
        <div id="EmployeePage">
            <EmployeePageHeader />
            <EmployeeInfo />
            <Link to={`/`}>Back To Directory</Link>
        </div>
    )
}