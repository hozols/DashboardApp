import React from 'react'

import { Table, Tag, Tabs } from 'antd';
import { Button, Menu, Dropdown, Icon } from 'antd';

const { TabPane } = Tabs;

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'IP', dataIndex: 'ip', key: 'ip' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
        {tags.map(tag => {
            let color = 'geekblue'
            if (tag === 'Crashed') {
                color = '#F25757';
            }
            if (tag === 'OK') {
                color = '#9EB25D';
            }
            if (tag === 'Down') {
                color = '#F2E863';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
        ),
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () =><Dropdown overlay={menu}>
            <Button>
                Actions <Icon type="down" />
            </Button>
        </Dropdown>,
    },
];

const menu = (
    <Menu>
        <Menu.Item key="1">Shutdown</Menu.Item>
        <Menu.Item key="2">Restart</Menu.Item>
        <Menu.Item key="3">Test</Menu.Item>
    </Menu>
);

const data = [
    {
        key: 1,
        name: 'Riga Plaza',
        ip: '123.34.34',
        address: 'TC Riga Plaza',
        description: 'Lorem ipsum',
        tags: ['OK']
    },
    {
        key: 2,
        name: 'Brivibas 39',
        ip: '176.32.10',
        address: 'Brivibas Iela 39',
        description: <h1 style={{color: 'red'}}>hello world</h1>,
        tags: ['Down']
    },
    {
        key: 3,
        name: 'Alfa',
        ip: '157.99.10',
        address: 'TC Alfa',
        description: 'lorem ipsum',
        tags: ['Crashed']
    },
    {
        key: 4,
        name: 'Riga Plaza',
        ip: '123.34.34',
        address: 'TC Riga Plaza',
        description: 'Lorem ipsum',
        tags: ['OK']
    },
    {
        key: 5,
        name: 'Brivibas 39',
        ip: '176.32.10',
        address: 'Brivibas Iela 39',
        description: 'Lorem ipsum',
        tags: ['Down']
    },
    {
        key: 6,
        name: 'Alfa',
        ip: '157.99.10',
        address: 'TC Alfa',
        description: 'lorem ipsum',
        tags: ['Crashed']
    },
    {
        key: 7,
        name: 'Riga Plaza',
        ip: '123.34.34',
        address: 'TC Riga Plaza',
        description: 'Lorem ipsum',
        tags: ['OK']
    },
    {
        key: 8,
        name: 'Brivibas 39',
        ip: '176.32.10',
        address: 'Brivibas Iela 39',
        description: 'Lorem ipsum',
        tags: ['Down']
    },
    {
        key: 9,
        name: 'Alfa',
        ip: '157.99.10',
        address: 'TC Alfa',
        description: 'lorem ipsum',
        tags: ['Crashed']
    },
    {
        key: 10,
        name: 'Riga Plaza',
        ip: '123.34.34',
        address: 'TC Riga Plaza',
        description: 'Lorem ipsum',
        tags: ['OK']
    },
    {
        key: 11,
        name: 'Brivibas 39',
        ip: '176.32.10',
        address: 'Brivibas Iela 39',
        description: 'Lorem ipsum',
        tags: ['Down']
    },
    {
        key: 12,
        name: 'Alfa',
        ip: '157.99.10',
        address: 'TC Alfa',
        description: 'lorem ipsum',
        tags: ['Crashed']
    },
    {
        key: 13,
        name: 'Riga Plaza',
        ip: '123.34.34',
        address: 'TC Riga Plaza',
        description: 'Lorem ipsum',
        tags: ['OK']
    },
    {
        key: 14,
        name: 'Brivibas 39',
        ip: '176.32.10',
        address: 'Brivibas Iela 39',
        description: 'Lorem ipsum',
        tags: ['Down']
    },
    {
        key: 15,
        name: 'Alfa',
        ip: '157.99.10',
        address: 'TC Alfa',
        description: 'lorem ipsum',
        tags: ['Crashed']
    },
    {
        key: 16,
        name: 'Riga Plaza',
        ip: '123.34.34',
        address: 'TC Riga Plaza',
        description: 'Lorem ipsum',
        tags: ['OK']
    },
    {
        key: 17,
        name: 'Brivibas 39',
        ip: '176.32.10',
        address: 'Brivibas Iela 39',
        description: 'Lorem ipsum',
        tags: ['Down']
    },
    {
        key: 18,
        name: 'Alfa',
        ip: '157.99.10',
        address: 'TC Alfa',
        description: 'lorem ipsum',
        tags: ['Crashed']
    },
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

export default function AtmTable() {
    return(
        <Table
            rowSelection={rowSelection}
            columns={columns}
            expandedRowRender={record =>   <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">
                    {record.description}
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Tab 3
                </TabPane>
            </Tabs>}
            dataSource={data}
        />
    )

}