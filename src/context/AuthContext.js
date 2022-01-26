import { Spin } from "antd";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

    const [isAuthLoading, setIsAuthLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [role, setRole] = useState();

    useEffect(() => {
       
    }, []);

    const values = {
        isLogin, setIsLogin,
        role, setRole,
    };

    if (isAuthLoading) {
        return <Spin />
    }
    
    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
};