import React, { useEffect, useState } from 'react';
import './App.css';
import { Divider, Layout } from 'antd';
import TopBar from './components/topbar/TopBar';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MoonFooter from './components/footer/MoonFooter';
import SmallTopBar from './components/topbar/SmallTopBar';
import SmallContentButton from './components/main/SmallContentButton';

const App = () => {
  const [isSmall, setIsSmall] = useState(false);

  const handleResize = () => {
    setIsSmall(window.innerWidth <= 1000);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      {isSmall && <SmallTopBar />}
      {!isSmall && <TopBar />}
      <Content>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Content>
      {isSmall && <SmallContentButton />}
      <MoonFooter />
    </Layout>
  );
};
export default App;
