import React, { useState } from 'react';
import "antd/dist/antd.css";
import './App.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TopNavigation } from './shared/components/top-navigation';
import { ProductService } from './shared/services/productsService';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import { ProductListPage } from './pages/products-list-page';
import { CreateProductPage } from './pages/create-product-page';
import axios from 'axios';
import { Product } from './shared/types/product';
import { useEffect } from 'react';

// const { Header, Footer, Sider, Content } = Layout;

function App() {
  // let service: ProductService = new ProductService();
  // let [productList, setProductList] = useState<Product[] | undefined>();

  // useEffect(() => {
  //   (async () => {
  //     service.getAll()
  //       .then((response) => {
  //         return response.data;
  //       })
  //       .then((data) => {
  //         console.table(data);
  //         setProductList(data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   })();
  // }, []);

  return (
    <Router>

      <Layout className="App layout">
        <Header>
          <div className="logo" />
          <TopNavigation />
        </Header>

        <Content style={{
          padding: '0 2rem 2rem 2rem',
          height: '100%'
        }}>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/products/list" component={ProductListPage} />
              <Route exact path="/products/add" component={CreateProductPage} />                
            </Switch>
          </div>
        </Content>

        <Footer className="footer" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

      </Layout>
    </Router>
  );
}

export default App;
