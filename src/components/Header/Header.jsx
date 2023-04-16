import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const route = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Sign up", path: "/sign-up" },
        { id: 2, name: "Login", path: "/login" },
    ]
    return (
        <div className="navbar bg-primary text-primary-content flex justify-between">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Logo</Link>
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