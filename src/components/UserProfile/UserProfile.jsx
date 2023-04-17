import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>User Email: {user.email}</h1>
        </div>
    );
};

export default UserProfile;