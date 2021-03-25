import React, { useEffect, useState } from 'react';
import Textbox from './Textbox1';
import styled from 'styled-components';

const CommonForm = (props) => {
  useEffect(() => {
    props.setUser(true);
  }, [])
  return (
    <InputContainer>
      <Textbox
        type='text'
        placeholder='Enter Your Email'
        name='email'
        fontSize='18px'
      />
      <Textbox
        type='password'
        placeholder='Enter Your Password'
        name='email'
        fontSize='18px'
      />
      <Textbox
        type='password'
        placeholder='Enter Your Password Again'
        name='email'
        fontSize='18px'
      />
      <Label>I am interested in:</Label>
      {props.hasNext && <button onClick={ () => props.next() }>Next</button>}
    </InputContainer>
  )
}

const InputContainer = styled.div`
  width: 70%;
  margin: 20px auto 0;

  & div + div {
    margin-top: 15px; 
  }
`;

const Label = styled.span`
  display: block;
  padding: 30px 10px 10px;
  font-size: 18px;
`;

export default CommonForm
