import { Outlet, Navigate } from "react-router-dom";
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const ProtectecRouted = () => {
    const { isAuthenticated , isLoading } = useAuth0(); 
    if (isLoading) {
        return <div>Loading....</div>;
    }
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectecRouted;
