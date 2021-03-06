import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  .auth {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
  }

  .sign_in, .sign_up {
    width: 50%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign_in {
    background-color: darkblue;
  }

  .sign_up {
    background-color: skyblue;
  }

  .trimmer {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0);
    transition: transform .5s ease;
  }

  .shift {
    transform: translateX(100%);
  }

  .container {
    width: 100vw;
    height: 100%;
    display: flex;
    transform: translateX(0);
    transition: transform 1s ease;
  }

  .switch {
    transform: translateX(-50%);
  }

  .sign_in_form, .sign_up_form {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
max-width: 1350px;
width: 80%;
margin: 0 auto;
`;

export default GlobalStyle;