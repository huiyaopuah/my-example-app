import { Card, Col, Descriptions, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const { Meta } = Card;

export default function Profile() {
    const [isLoading, setIsLoading] = useState(false);
    const { cookies } = useContext(AuthContext);

    useEffect(() => {
        
    }, [])

    return (
        <Card
            align="center"
        >
            <Row justify='center' align='middle'>
                {/* <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Admin" description={cookies.username} />
                    </Card>
                </Col> */}
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <Descriptions title="Profile Detail" bordered column={1}>
                        <Descriptions.Item label="Username">{cookies.username}</Descriptions.Item>
                        <Descriptions.Item label="Name">Admin 1</Descriptions.Item>
                        <Descriptions.Item label="Email">admin1@gmail.com</Descriptions.Item>
                        <Descriptions.Item label="Contact">+6012-3456789</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </Card>
    );
}