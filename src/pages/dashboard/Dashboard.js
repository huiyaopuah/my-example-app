import { Card } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        
    }, [])

    return (
        <Card
            align="center"
        >
            Dashboard
        </Card>
    );
}