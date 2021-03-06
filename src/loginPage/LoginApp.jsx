import React, { useRef } from 'react';
import GlobalStyle from './asset/GlobalStyle';
import styled from 'styled-components';

function LoginApp() {
  const trimmer = useRef(null);
  const container = useRef(null);

  const signUpClicked = () => {
    trimmer.current.classList.add("shift");
    container.current.classList.add("switch");
  }

  const signInClicked = () => {
    trimmer.current.classList.remove("shift");
    container.current.classList.remove("switch");
  }

  return (
    <>
      <GlobalStyle />
      <Auth>
        <SignIn>
          <button onClick={signInClicked}>Sign In</button>
        </SignIn>
        <SignUp>
          <button onClick={signUpClicked}>Sign Up</button>
        </SignUp>
        <Trimmer ref={trimmer}>
          <Container ref={container}>
            <SignInForm><span>Sign In Form</span></SignInForm>
            <SignUpForm><span>Sign Up Form</span></SignUpForm>
          </Container>
        </Trimmer>
      </Auth>
    </>
  )
}

const Auth = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
`;

const SignIn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: darkblue;
  justify-content: center;
`;

const SignUp = styled(SignIn)`
  background-color: skyblue;
`;

const Trimmer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: transform .5s ease;
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  transform: translateX(0);
  transition: transform 1s ease;
`;

const SignInForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: center;
`;

const SignUpForm = styled(SignInForm)``;


export default LoginApp
