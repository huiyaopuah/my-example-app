import { DashboardOutlined, ExportOutlined, ImportOutlined, TransactionOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import "../Style.scss";

const { SubMenu } = Menu;

export default function AdminMenu(props) {
    const { collapsed } = props;
	const history = useHistory();

    function handleSiderMenuClick(action) {
		switch (action.key) {
			case "/route-1":
				history.push("/route-1");
				break;
			case "/route-2":
				history.push("/route-2");
				break;
			default:
				history.push("/default-route");
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

                <Menu.Item key="menu-2">
					<DashboardOutlined />
					<span className="nav-text">
                        Menu 2
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

                <SubMenu
					key="sub-menu-2"
					title={
						<span>
							<TransactionOutlined />
							<span>Sub Menu 2</span>
						</span>
					}
				>
					<Menu.Item
						key="sub-menu-2-1"
						icon={<ImportOutlined />}
					>
						<span className="nav-text">
                            Sub Menu 2-1
						</span>
					</Menu.Item>
					<Menu.Item
						key="sub-menu-2-2"
						icon={<ExportOutlined />}
					>
						<span className="nav-text">
                            Sub Menu 2-2
						</span>
					</Menu.Item>
				</SubMenu>
            </Menu>
		</div>
    )
}