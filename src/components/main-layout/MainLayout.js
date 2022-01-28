import { Layout } from "antd";
import { useState } from "react";
// import RouteConfig from "../../router/RouteConfig";
import RoutingList from "../../router/RouteList";
import Navbar from "./navbar/Navbar";
import SideMenu from "./side-menu/SideMenu";

const { Content, Footer } = Layout;

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false);

    function handleOnCollapse() {
        setCollapsed(!collapsed);
    }

    return (
        <Layout>
            <SideMenu collapsible collapsed={collapsed} handleOnCollapse={handleOnCollapse} />
            <Layout>
                <Navbar collapsed={collapsed} handleOnCollapse={handleOnCollapse} />
                <Content style={{ overflow: 'auto', padding: 30 }}>
                    {/* <RouteConfig /> */}
                    <RoutingList />
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    )
}