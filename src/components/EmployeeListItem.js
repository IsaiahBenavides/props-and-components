import React from "react"
export default function EmployeeListItem(props) {
    const employees = [
        {
            profileIcon: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F448-4480961_executive-ceo-icon.png&sp=1670524104Tec79540864412973249e63c9f5520e4a0d216045b759b22689468cfe96009a39",
            name: "James King",
            position: "President and CEO",
        },
        {
            profileIcon: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQNzxGIKWuiJE5BvyFZgiSl-z_A-LaA4ZIufG8YhL-9Lztxgqs%26s&sp=1670524104T56e4a272396068ad6794aa4438010637e78044466a3452051d6ac3a452ed79aa",
            name: "Julie Taylor",
            position: "VP of Marketing",
        },
        {
            profileIcon: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F448-4480961_executive-ceo-icon.png&sp=1670524104Tec79540864412973249e63c9f5520e4a0d216045b759b22689468cfe96009a39",
            name: "Eugene Lee",
            position: "CFO",
        },
        {
            profileIcon: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F448-4480961_executive-ceo-icon.png&sp=1670524104Tec79540864412973249e63c9f5520e4a0d216045b759b22689468cfe96009a39",
            name: "John Williams",
            position: "VP of Engineering",
        },
        {
            profileIcon: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F448-4480961_executive-ceo-icon.png&sp=1670524104Tec79540864412973249e63c9f5520e4a0d216045b759b22689468cfe96009a39",
            name: "Ray Moore",
            position: "VP of Sales",
        },
        {
            profileIcon: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F448-4480961_executive-ceo-icon.png&sp=1670524104Tec79540864412973249e63c9f5520e4a0d216045b759b22689468cfe96009a39",
            name: "Paul Jones",
            position: "QA Manager",
        },
    ]
    return (
        <>
            {employees.map((item) => {
                const { name, position, profileIcon } = item
                return (
                    <div className="ListItem">
                        <img src={profileIcon} className="Icon"></img>
                        <div className="ListText">
                            <h3>{name}</h3>
                            <p>{position}</p>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}