import { LogoutOutlined, MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, Row, Space } from "antd";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';
import { styles } from "../../../styles/Styles";

const { Header } = Layout;
const { SubMenu } = Menu;

export default function Navbar(props) {
    const { collapsed, handleOnCollapse } = props;
    const { cookies, setIsLogin } = useContext(AuthContext);
    const history = useHistory();

    function getCollapseIcon() {
		if (collapsed) {
			return (
				<MenuUnfoldOutlined
					onClick={() => handleOnCollapse()}
					// className={styles.trigger}
				/>
			);
		} else {
			return (
				<MenuFoldOutlined
					onClick={() => handleOnCollapse()}
					// className={styles.trigger}
				/>
			);
		}
	}

    function handleSettingMenuClick(action) {
        switch (action.key) {
            case '/profile':
                history.push('/profile');
                break;
            case '/setting':
                history.push('/setting');
                break;
            case '/logout':
                handleLogout();
                break;
            default:
                history.push('/dashboard');
            }
    }

    function handleLogout() {
        setIsLogin(false);
        history.push('/login');
    }

    return (
        <Header style={styles.header}>
            <Row justify="space-between" align="middle">
                <Col>
                    <div>{getCollapseIcon()}</div>
                </Col>
				<Col>
                    <Menu mode="horizontal" onClick={(action) => handleSettingMenuClick(action)}>
                        <SubMenu title={<MenuOutlined />}>
                            <Menu.ItemGroup 
                                title={
                                    <Row gutter={16} justify="start" align="middle">
                                        <Col>
                                            <Avatar size="large" icon={<UserOutlined />} />
                                        </Col>
                                        <Col>
                                            {cookies.username}
                                        </Col>
                                    </Row>
                                }
                            >
                                <Menu.Divider />
                                <Menu.Item key="/profile">
                                    <Space direction="horizontal">
                                        <UserOutlined />
                                        Profile
                                    </Space>
                                </Menu.Item>
                                <Menu.Item key="/setting">
                                    <Space direction="horizontal">
                                        <SettingOutlined />
                                        Setting
                                    </Space>
                                </Menu.Item>
                                <Menu.Item key="/logout">
                                    <Space direction="horizontal">
                                        <LogoutOutlined />
                                        Logout
                                    </Space>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
				</Col>
            </Row>
        </Header>
    )
}