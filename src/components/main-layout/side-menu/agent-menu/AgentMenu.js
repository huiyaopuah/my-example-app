import { DashboardOutlined, ExportOutlined, ImportOutlined, TransactionOutlined } from "@ant-design/icons";
import { Menu } from "antd";
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
			case "/transaction/pending":
				history.push("/transaction/pending");
				break;
			default:
				history.push("/dashboard");
		}
	}

    return (
        <div className="main-menu-scroll">
			<a href="/dashboard">
				{collapsed === true ? (
					<div className="menu-logo-small" />
				) : (
					<div className="menu-logo" />
				)}
			</a>
			<Menu
				mode="inline"
				theme='dark'
				onClick={handleSiderMenuClick}
			>
				<Menu.Item key="menu-1">
					<DashboardOutlined />
					<span className="nav-text">
                        Menu 1
					</span>
				</Menu.Item>

				<SubMenu
					key="sub-menu-1"
					title={
						<span>
							<TransactionOutlined />
							<span>Sub Menu 1</span>
						</span>
					}
				>
					<Menu.Item
						key="sub-menu-1-1"
						icon={<ImportOutlined />}
					>
						<span className="nav-text">
                            Sub Menu 1-1
						</span>
					</Menu.Item>
					<Menu.Item
						key="sub-menu-1-2"
						icon={<ExportOutlined />}
					>
						<span className="nav-text">
                            Sub Menu 1-2
						</span>
					</Menu.Item>
				</SubMenu>
            </Menu>
		</div>
    )
}