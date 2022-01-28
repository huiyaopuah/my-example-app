import { Avatar, Form, Select, Space, Typography } from "antd";
import mandarin from '../../../assets/icon/china.png';
import bahasa from '../../../assets/icon/malaysia.png';
import english from '../../../assets/icon/united-kingdom.png';

const { Title } = Typography;
const { Option } = Select;

export default function GeneralSetting() {

    function handleChangeLanguage(values) {
        console.log('Received values of form: ', values);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div style={{ maxWidth: 600 }}>
            <Title level={3}>General Setting</Title>
            <Form
                name="general_setting"
                layout="vertical"
                // onFinish={handleUpdateGeneral}
                requiredMark={false}
            >
                <Form.Item
                    name="language"
                    label="Language"
                >
                    <Select 
                        onChange={handleChange} 
                        placeholder='Please select language'
                        defaultValue="english"
                        size="large"
                        style={{ width: 400 }}
                    >
                        <Option value="english">
                            <Space direction="horizontal">
                                <Avatar src={english} />
                                English
                            </Space>  
                        </Option>
                        <Option value="mandarin">
                            <Space direction="horizontal">
                                <Avatar src={mandarin} />
                                Mandarin
                            </Space>  
                        </Option>
                        <Option value="bahasa">
                            <Space direction="horizontal">
                                <Avatar src={bahasa} />
                                Bahasa
                            </Space>  
                        </Option>
                    </Select>
                </Form.Item>

            </Form>
        </div>
    )
}