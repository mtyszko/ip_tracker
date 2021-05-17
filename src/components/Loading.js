import React from 'react';
import styled from 'styled-components';

import spinner from 'assets/spinner.gif';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: hsla(0, 0%, 59%, 0.3);
`;

const Img = styled.img`
  align-self: center;
  width: 5vw;
  height: 5vw;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Img src={spinner} alt='loading...' />
    </Wrapper>
  );
}
