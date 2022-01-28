import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

export default function SecuritySetting() {

    function handleUpdateSecurity(values) {
        console.log('Received values of form: ', values);
    }

    return (
        <div style={{ maxWidth: 600 }}>
            <Title level={3}>Security Setting</Title>
            <Form
                name="security_setting"
                layout="vertical"
                onFinish={handleUpdateSecurity}
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
                    name="curPassword"
                    label="Current Password"
                    rules={[{ required: true, message: 'Please input your Current Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Current Password"
                    />
                </Form.Item>

                <Form.Item
                    name="newPassword"
                    label="New Password"
                    rules={[{ required: true, message: 'Please input your New Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="New Password"
                    />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}