import React, { createContext, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const CommonContext = createContext();

export const CommonContextProvider = (props) => {
    const { isLogin, cookies } = useContext(AuthContext);

    useEffect(() => {

    }, [])
    
    if (cookies.username === undefined) {
        return <Redirect to='/login' />
    }
    
    const values = {
        
    };
    
    return (
        <CommonContext.Provider value={values}>
            {props.children}
        </CommonContext.Provider>
    );
};