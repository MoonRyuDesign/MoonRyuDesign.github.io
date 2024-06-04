import { Button } from 'antd';

const SmallContentButton = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        bottom: '20px',
        zIndex: 1000,
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Button
        style={{
          width: '95%',
          height: '60px',
          boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1)',
          fontWeight: 'bold',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '8px',
          border: 'none',
          fontSize: '1.5rem',
        }}
      >
        견적 문의
      </Button>
    </div>
  );
};

export default SmallContentButton;
