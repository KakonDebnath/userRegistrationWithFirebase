import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            Home {user && <p>{user.displayName}</p>}
        </div>
    );
};

export default Home;