import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Search from 'components/Search';
import DataPanel from 'components/DataPanel';
import MapBox from 'components/MapBox';
import Footer from 'components/Footer';

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

const Title = styled.h1`
  margin: 0 auto;
  padding: 30px 0 20px;
  color: #ffffff;
  font-size: clamp(24px, 3vw, 28px);
  text-align: center;
`;

const MapWrapper = styled.section`
  height: 100%;
  background-color: mediumaquamarine;
`;

const Main = () => (
  <Wrapper>
    <Header>
      <Title>IP Adress Tracker</Title>
      <Search />
      <DataPanel />
    </Header>
    <MapWrapper>
      <MapBox />
    </MapWrapper>
    <Footer />
  </Wrapper>
);

Main.propTypes = {};

export default Main;
