import React from 'react';

const MainSlide = () => {
  return (
    <video
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
      muted
      autoPlay
      loop
    >
      <source src="/video/mainPlay.mp4" type="video/mp4" />
    </video>
  );
};
export default MainSlide;
