import { Card } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Page1() {
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        
    }, [])

    return (
        <Card
            align="center"
        >
            Page 1
        </Card>
    );
}