import { Layout } from "antd";
import { useContext, useState } from "react";
import { Redirect } from 'react-router';
import { AuthContext } from "../../context/AuthContext";
// import RouteConfig from "../../router/RouteConfig";
import RouteList from "../../router/RouteList";
import SideMenu from "./side-menu/SideMenu";

const { Header, Content, Footer } = Layout;

export default function MainLayout() {
    const { isLogin } = useContext(AuthContext);
    const [collapsed, setCollapsed] = useState(false);

    function handleOnCollapse() {
        setCollapsed(!collapsed);
    }

    if (!isLogin) {
        return <Redirect to='/login' />
    }

    return (
        <Layout>
            <SideMenu collapsible collapsed={collapsed} handleOnCollapse={handleOnCollapse} />
            <Layout>
                <Header>Header</Header>
                <Content>
                    {/* <RouteConfig /> */}
                    <RouteList />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}