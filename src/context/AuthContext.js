import { Spin } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const history = useHistory();
    const [isAuthLoading, setIsAuthLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [role, setRole] = useState();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    useEffect(() => {
        // cookies ? setIsLogin(true) : setIsLogin(false);
    }, [])

    const values = {
        isLogin, setIsLogin,
        role, setRole,
        cookies, setCookie, removeCookie,
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