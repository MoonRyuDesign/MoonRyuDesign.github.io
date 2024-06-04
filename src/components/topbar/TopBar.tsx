import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLogo from '../main/AppLogo';
import { elements } from '../../util/data';

const TopElement = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {elements.map((element, index) => (
        <div key={index}>
          <span
            style={{
              margin: '0px 10px',
              cursor: 'pointer',
              fontSize: '2vw',
            }}
            onClick={() => navigate(element.path)}
            onMouseEnter={(e) => {
              e.currentTarget.style.fontWeight = 'bold';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.fontWeight = 'normal';
            }}
          >
            {element.name}
          </span>
        </div>
      ))}
    </div>
  );
};

const TopBar = () => {
  return (
    <Header
      style={{
        display: 'flex',
        backgroundColor: 'white',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        width: '100%',
        height: '60px',
        zIndex: 1000,
      }}
    >
      <div style={{ display: 'flex' }}>
        <AppLogo />
      </div>
      <div style={{ marginLeft: 'auto', marginRight: '24px' }}>
        <TopElement />
      </div>
    </Header>
  );
};

export default TopBar;
