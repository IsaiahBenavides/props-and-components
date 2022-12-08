import React from "react";

export default function Header() {
    return (
        <>
            <div id="Header">
                <h1>
                    Employee Direcotory
                </h1>
            </div>
            <input type={String} id="Search">
                {/* <p>Search Bar</p>
                <input type={String}></input> */}
            </input>
        </>
    )
}