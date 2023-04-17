import React, { useContext } from 'react';
import { Link} from "react-router-dom";
import { AuthContext } from '../../providers/AuthProviders';


const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    // handleLogout 
    const handleLogout =()=>{
        logOut().then(result=>{}).catch(error=>{error.message})
    }
    const route = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Sign up", path: "/sign-up" },
        { id: 3, name: "Login", path: "/login" },
        { id: 4, name: "Order", path: "/order" },
        { id: 5, name: "Profile", path: "/user-profile" },
    ]
    return (
        <div className="navbar bg-primary text-primary-content flex justify-between">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Logo</Link>
            <p>
            {
                user? <><span>{user.email}</span> <button onClick={handleLogout} className="hover:bg-slate-400 rounded-lg px-4 py-2">Sign out</button></>:''
            }
            </p>
            <div>
                {
                    route.map(li =>
                        <Link key={li.id} to={li.path} className="btn btn-ghost normal-case text-xl">{li.name}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default Header;