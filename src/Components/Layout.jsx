import React from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AtmTable from "./AtmTable";
import TerminalOutput from "./TerminalOutput";
import Stats from "./Stats";
import StatsCycle from "./StatsCycle";
import HeaderBar from "./HeaderBar";
import ActionBar from "./ActionBar";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function AppLayout() {
    return (
    <div>
        <Layout>
            <Header className="header"  style={{padding: 0, }}>
                <HeaderBar fullwidth />
            </Header>
            <StatsCycle/>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                <Icon type="user" />
                Saved filters
              </span>
                            }
                        >
                            <Menu.Item key="1">Riga</Menu.Item>
                            <Menu.Item key="2">Sigulda</Menu.Item>
                            <Menu.Item key="3">Jurmala</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <ActionBar/>
                        <AtmTable/>
                        <TerminalOutput/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
)
}