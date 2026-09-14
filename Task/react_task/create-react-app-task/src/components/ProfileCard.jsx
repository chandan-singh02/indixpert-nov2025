import React from "react";
import { Avatar } from "./Avatar";

export default function ProfileCard() {
    return (
        <div className="profile-card">
            <Avatar />
            <h2>John Doe</h2>
            <h3>Fronted development Student</h3>
            <p>I enjoy building clean and responsive users interfaces using react</p>
        </div>
    )
}