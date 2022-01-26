import { Button, Result } from 'antd';
import React from 'react';
import { useHistory } from "react-router-dom";

export default function Error403() {  

    const history = useHistory();

    function handleBack() {
        history.goBack();
    }

    return (
        <Result
            status="403"
            title="403"
            subTitle='Sorry, you are not authorized to access this page.'
            extra={<Button type="primary" onClick={handleBack}>Back</Button>}
        />
    );
}