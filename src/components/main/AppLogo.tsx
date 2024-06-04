import { useNavigate } from 'react-router-dom';
import appLogo from '../../assets/appLogo.png';
import React from 'react';

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

export default AppLogo;
