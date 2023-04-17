import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, isLoading} = useContext(AuthContext)
    
    if(isLoading){
        return <progress className="progress w-56"></progress>;
    }
    if(user){
        return children;
    }else{
        return <Navigate to="/login" replace={true}></Navigate>
    }
};

export default PrivateRoutes;