import { Button, Result } from 'antd';
import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';

export default function Error500() {  

    const history = useHistory();
    const { setIsLogin } = useContext(AuthContext);

    function handleBack() {
        setIsLogin(false);
        history.replace('/login');
    }

    return (
        <Result
            status="500"
            title="500"
            subTitle='Sorry, something went wrong.'
            extra={<Button type="primary" onClick={handleBack}>Back</Button>}
        />
    );
}