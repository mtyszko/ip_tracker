import React, { useContext } from 'react';
import styled from 'styled-components';

import { DataContext } from 'App';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  left: 50%;
  top: -40%;
  transform: translate(-50%, -25%);
  z-index: 10;
  width: clamp(278px, 85vw, 1110px);
  font-size: 42px;
  background-color: hsl(0, 100%, 100%);
  padding: 20px 0;
  border-radius: 15px;
  @media (min-width: 1206px) {
    flex-direction: row;
    justify-content: space-between;
    top: -30%;
    transform: translate(-50%, -50%);
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  height: 100%;
  padding: 10px 40px;
  @media (min-width: 1206px) {
    align-self: flex-start;
    padding: 0 40px;
    min-height: 120px;
    width: 100%;
    border-right: 1px solid hsla(0, 0%, 59%, 0.4);
    text-align: left;
    &:last-child {
      border: none;
    }
  }
`;

const Label = styled.div`
  text-align: center;
  color: hsl(0, 0%, 59%);
  padding: 0 0 10px 0;
  font-size: clamp(10px, 2vw, 13px);
  font-weight: 700;
  text-transform: uppercase;
  @media (min-width: 1206px) {
    text-align: left;
  }
`;

const Content = styled.div`
  text-align: center;
  color: hsl(0, 0%, 17%);
  font-size: clamp(20px, 4vw, 26px);
  font-weight: 500;
  @media (min-width: 1206px) {
    text-align: left;
  }
`;

export default function DataPanel() {
  const {
    data: { ip, locName, timezone, isp },
  } = useContext(DataContext);

  const contentData = [
    { label: 'ip adress', content: ip },
    { label: 'location', content: locName },
    { label: 'timezone', content: timezone ? `UTC ${timezone}` : '' },
    { label: 'isp', content: isp },
  ];

  return (
    <Wrapper>
      {contentData.map(({ label, content }) => (
        <InfoItem key={label}>
          <Label>{label}</Label>
          <Content>{content || '-'}</Content>
        </InfoItem>
      ))}
    </Wrapper>
  );
}
