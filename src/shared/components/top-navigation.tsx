import { Menu } from 'antd';
import { BarcodeOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import Layout from 'antd/lib/layout/layout';

const { SubMenu } = Menu;

export class TopNavigation extends React.Component {
    state = {
        current: '',
    };

    handleClick = (e: any) => {
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Layout>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">

                    <SubMenu key="product-sub-menu" title="Products">

                        <Menu.Item key="products-list-all" icon={<ProfileOutlined />}>
                            <Link to="/products/list">List all</Link>
                        </Menu.Item>

                        <Menu.Item key="products-create" icon={<BarcodeOutlined />}>
                            <Link to="/products/add">Add new</Link>
                        </Menu.Item>
                    </SubMenu>

                </Menu>
            </Layout>
        );
    }
}