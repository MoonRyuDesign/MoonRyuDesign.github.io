import React from 'react';
import mainPlay from '../../assets/mainPlay.gif';

const MainContent = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <img style={{ width: '100%' }} src={mainPlay} alt="mainPlay" />
    </div>
  );
};
export default MainContent;
