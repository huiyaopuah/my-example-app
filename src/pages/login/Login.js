import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Spin } from "antd";
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
    const { isLogin, setIsLogin, setRole, setCookie } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    
    function handleLogin(values) {
        setIsLoading(true);
        // console.log('Received values of form: ', values);
        if(values.username === 'admin1') {
            setRole('admin');
            setCookie('username', values.username, {path : '/'});
            setIsLogin(true);
        } else if(values.username === 'agent1') {
            setRole('agent');
            setCookie('username', values.username, {path : '/'});
            setIsLogin(true);
        }
    }

    if (isLogin) {
		return <Redirect to="/dashboard" />;
	}

    if (isLoading) {
        return <Spin />
    }

    return (
        <Row justify='center' align='middle'style={{ marginTop: 300 }}>
            <Col>
                <Card
                    align="center"
                    title='Login'
                    style={{ width: 500 }}
                >
                    <Form
                        name="normal_login"
                        layout="vertical"
                        onFinish={handleLogin}
                        requiredMark={false}
                    >
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit" size='large'>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
        
    )
}