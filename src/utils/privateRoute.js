import React from "react";
import {Route, useNavigate} from "react-router-dom";

function PrivateRoute({children, ...rest}) {
    // let auth = useAuth();
    const navigate = useNavigate();
    return (
        <Route
            {...rest}
            render={() => navigate
                ? children
                : navigate("/login")
            }
        />
    );
}
