import React from 'react';
import styled, { css } from 'styled-components';

import { GlobalContext } from 'App';
import icon from 'assets/icon-arrow.svg';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 58px;
`;

const Input = styled.input`
  display: block;
  width: clamp(220px, 70vw, 500px);
  padding: 0 25px;
  line-height: 58px;
  font-size: 18px;
  border: none;
  outline: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Btn = styled.button`
  width: 58px;
  height: 58px;
  border: none;
  outline: none;
  background-color: hsl(0, 0%, 0%);
  background-image: url(${icon});
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: 0.2s;
  &:hover {
    background-color: hsl(0, 0%, 25%);
  }
`;

const Search = () => (
  <GlobalContext.Consumer>
    {({ handleInput, handleSearch, input }) => (
      <Wrapper>
        <Form /* onSubmit={handleSearch} */>
          <Input
            type='text'
            name='search'
            value={input}
            placeholder='search IP number'
            // onChange={handleInput}
          />
          <Btn />
        </Form>
      </Wrapper>
    )}
  </GlobalContext.Consumer>
);

export default Search;
