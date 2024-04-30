import React, { useContext } from 'react';
import { DashboardContext } from './Dashboard'; 

function Profile() {
    const { userDetails } = useContext(DashboardContext);

    return (
        <div>
            <h2>Profile Page</h2>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
        </div>
    );
}

export default Profile;
