import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  .shift {
    transform: translateX(100%);
  }

  .switch {
    transform: translateX(-50%);
  }
`;

export const Wrapper = styled.div`
max-width: 1350px;
width: 80%;
margin: 0 auto;
`;

export default GlobalStyle;