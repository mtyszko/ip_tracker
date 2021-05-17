import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  right: 10px;
  padding: 10px 20px;
  color: hsl(0, 0%, 17%);
  border-radius: 10px;
  background-color: hsla(0, 100%, 100%, 0.5);
  & a {
    color: hsl(0, 0%, 17%);

    &:hover {
      color: hsl(229, 61%, 59%);
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <span>
        &copy;
        <a href='https://mtdev.pl' target='_blank' rel='noreferrer'>
          mtdev
        </a>{' '}
      </span>
      |&nbsp;
      <span>
        maps by
        <a href='https://www.mapbox.com/' target='_blank' rel='noreferrer'>
          Mapbox
        </a>
      </span>
    </Wrapper>
  );
}
