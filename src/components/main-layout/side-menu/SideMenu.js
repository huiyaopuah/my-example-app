import { Drawer, Layout } from 'antd';
import React from 'react';
import RoleCheck from '../../../utils/RoleCheck';
import './Style.scss';

const { Sider } = Layout;

export default function SideMenu(props) {
    const { collapsed, handleOnCollapse } = props;

    if (window.innerWidth < 1024) {
        return (
            <Drawer
                placement="left"
                onClose={handleOnCollapse}
                closable={false}
                visible={collapsed}
                bodyStyle={{ backgroundColor: "#001529", padding: "0" }}
            > 
                {RoleCheck()}
            </Drawer>
        )
    }
    return (
        <Sider
            collapsible
            breakpoint="sm"
            onCollapse={handleOnCollapse}
            collapsed={collapsed}
            collapsedWidth="85"
            width="250"
            theme='dark'
            trigger={null}
            className="sider-scroll"
            style={{ 
                overflow: 'auto', 
                height: '100vh', 
                position: 'sticky', 
                top: 0, 
                left: 0, 
            }}
        >
            {RoleCheck(collapsed)}
        </Sider>
        
    );
}