import { Header } from 'antd/es/layout/layout';
import React from 'react';
import appLogo from '../../assets/appLogo.png';
import { useNavigate } from 'react-router-dom';

interface Element {
  path: string;
  name: string;
}

const elements: Element[] = [
  {
    path: '/portfolio',
    name: '포트폴리오',
  },
  {
    path: '/about',
    name: '소개',
  },
  {
    path: '/location',
    name: '찾아오는 길',
  },
  {
    path: '/contact',
    name: '견적문의',
  },
];

const TopElement = ({ elements }: { elements: Element[] }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {elements.map((element, index) => (
        <div key={index}>
          <span
            style={{
              margin: '0px 10px',
              cursor: 'pointer',
              fontSize: '20px',
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

const AppLogo = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={`${appLogo}`}
        alt="logo"
        width="180px"
        height="auto"
        onClick={() => {
          navigate('/');
        }}
        style={{
          cursor: 'pointer',
        }}
      />
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
        zIndex: 1000,
      }}
    >
      <div style={{ display: 'flex' }}>
        <AppLogo />
      </div>
      <div style={{ marginLeft: 'auto', marginRight: '24px' }}>
        <TopElement elements={elements} />
      </div>
    </Header>
  );
};

export default TopBar;
