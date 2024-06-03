import React from 'react';
import './App.css';
import { Divider, Layout } from 'antd';
import TopBar from './components/topbar/TopBar';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MoonFooter from './components/footer/MoonFooter';

const App = () => {
  return (
    <Layout>
      <TopBar />
      <Content>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Content>
      <MoonFooter />
    </Layout>
  );
};
export default App;
