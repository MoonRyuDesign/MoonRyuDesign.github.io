import { Footer } from 'antd/es/layout/layout';

const MoonFooter = () => {
  return (
    <Footer
      style={{
        display: 'flex',
        textAlign: 'start',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <div style={{ marginBottom: '4px' }}>상호: 문유 디자인</div>
      <div style={{ marginBottom: '4px' }}>대표: 문하늘, 유재현</div>
      <div style={{ marginBottom: '4px' }}>
        주소: 경기도 남양주시 다산순환로 20, 7층 23호 (다산동, 다산스
        현대프리미어캠퍼스)
      </div>
      <div style={{ marginBottom: '4px' }}>전화: 010-5805-9409</div>
      <div style={{ marginBottom: '4px' }}>메일: ansdb0715@naver.com</div>
      <div style={{ marginBottom: '4px' }}>사업자번호: 139-67-00617</div>
      <div style={{ marginTop: '4px' }}>
        © Copyright 2024 MoonRyu Inc. All Right Reserved.
      </div>
    </Footer>
  );
};

export default MoonFooter;
