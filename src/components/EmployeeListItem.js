import React from "react"
import { Link } from "react-router-dom"
import data from "../data"
export default function EmployeeListItem(props) {
    return (
        <>
            {data.map((item) => {
                const { name, position, profileIcon } = item
                return (
                    <div className="ListItem">
                        <img src={profileIcon} className="Icon"></img>
                        <div className="ListText">
                            <h3>{name}</h3>
                            <p>{position}</p>
                        </div>
                        <Link to={`/employee/${name}`}>Contact Info</Link>
                    </div>
                )
            })
            }
        </>
    )
}