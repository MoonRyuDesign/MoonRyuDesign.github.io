import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import AppLogo from '../main/AppLogo';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { elements } from '../../util/data';
import { useNavigate } from 'react-router-dom';

const SmallTopBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <AppLogo />
      </div>
      <div style={{ display: 'flex' }}>
        <MenuOutlined style={{ fontSize: '20px' }} onClick={showDrawer} />
      </div>
      <Drawer open={open} onClose={onClose}>
        {elements.map((element, index) => (
          <div key={index}>
            <span
              style={{
                cursor: 'pointer',
                fontSize: '1.25rem',
              }}
              onClick={() => {
                navigate(element.path);
                setOpen(false);
              }}
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
      </Drawer>
    </Header>
  );
};

export default SmallTopBar;
