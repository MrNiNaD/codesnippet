import React from 'react';
import styled from 'styled-components';

function Textbox1({ type, placeholder, name }) {
  return (
    <TextboxContainer>
      <input
        type={type} 
        placeholder={placeholder}
        name={name} 
      />
    </TextboxContainer>
  )
}

const TextboxContainer = styled.div`
  border-bottom: 2px solid #000;

  input {
    width: 100%;
    padding: 10px;
    border: none;
    font-size: 20px;

    &::placeholder {
      color: #000;
    }

    &:focus {
      outline: none;
    }
  }

`;

export default Textbox1;
