import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

export default function ProfileSetting() {

    function handleUpdateGeneral(values) {
        console.log('Received values of form: ', values);
    }

    return (
        <div style={{ maxWidth: 600 }}>
            <Title level={3}>Profile Setting</Title>
            <Form
                name="profile_setting"
                layout="vertical"
                onFinish={handleUpdateGeneral}
                requiredMark={false}
            >
                <Form.Item
                    name="name"
                    label="Name"
                >
                    <Input prefix={<UserOutlined />} placeholder="Please enter name" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                >
                    <Input prefix={<MailOutlined />} placeholder="Please enter email" />
                </Form.Item>

                <Form.Item
                    name="contact"
                    label="Contact"
                >
                    <Input prefix={<PhoneOutlined />} placeholder="Please enter contact" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                >
                    <TextArea rows={4} placeholder="Please enter description"/>
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