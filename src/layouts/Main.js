import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import bgimg from 'assets/pattern-bg.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Header = styled.header`
  height: 298px;
  background-color: cornflowerblue;
  background: url(${bgimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  @media (min-width: 1128px) {
    height: 277px;
  }
`;

const MapContainer = styled.section`
  height: 100%;
  background-color: mediumaquamarine;
`;

const Main = () => (
  <Wrapper>
    <Header />
    <MapContainer />
  </Wrapper>
);

Main.propTypes = {};

export default Main;
