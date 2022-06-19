import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../components/login/stores/authStore";

export const ProtectedRoute = ({children}) => {
    const auth = useAuth((state) => state.isAuth)

    if (!auth) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};
