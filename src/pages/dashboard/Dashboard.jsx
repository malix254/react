import React, { createContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

// Create a Context
export const DashboardContext = createContext(null);

function Dashboard() {
    const [userDetails, setUserDetails] = useState({ name: "Group 6", email: "g6@co.ke" });

    return (
        <DashboardContext.Provider value={{ userDetails, setUserDetails }}>
            <div>
                <h1>Dashboard</h1>
                <nav>
                    <Link to="profile">Profile</Link> | 
                    <Link to="settings">Settings</Link> | 
                    <Link to="messages">Messages</Link>
                </nav>
                <Outlet /> {/* This is where nested components will be rendered */}
            </div>
        </DashboardContext.Provider>
    );
}

export default Dashboard;
