import { DashboardOutlined, ExportOutlined, ImportOutlined, TransactionOutlined } from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import { useHistory } from "react-router-dom";
import "../Style.scss";

const { SubMenu } = Menu;

export default function AgentMenu(props) {
    const { collapsed } = props;
	const history = useHistory();

    function handleSiderMenuClick(action) {
		switch (action.key) {
			case "/dashboard":
				history.push("/dashboard");
				break;
			case "/page-1":
				history.push("/page-1");
				break;
			case "/page-2":
				history.push("/page-2");
				break;
			default:
				history.push("/dashboard");
		}
	}

    return (
        <div className="main-menu-scroll">
			<Row justify="center" align="middle" >
				<Col>
					{
						collapsed ? (
							<div style={{ padding: 30 }} />
						) : (
							<div style={{ padding: 30 }} />
						)
					}
				</Col>
			</Row>
			<Menu
				mode="inline"
				theme='dark'
				onClick={handleSiderMenuClick}
			>
				<Menu.Item key="/dashboard">
					<DashboardOutlined />
					<span className="nav-text">
                        Dashboard
					</span>
				</Menu.Item>

				<SubMenu
					key="/sub-menu-1"
					title={
						<span>
							<TransactionOutlined />
							<span>Sub Menu 1</span>
						</span>
					}
				>
					<Menu.Item
						key="/page-1"
						icon={<ImportOutlined />}
					>
						<span className="nav-text">
                            Page 1
						</span>
					</Menu.Item>
					<Menu.Item
						key="/page-2"
						icon={<ExportOutlined />}
					>
						<span className="nav-text">
                            Page 2
						</span>
					</Menu.Item>
				</SubMenu>
            </Menu>
		</div>
    )
}