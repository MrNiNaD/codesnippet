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
            <SignInForm>
              <SignInDiv>
                <Heading>Sign In</Heading>
                <form>
                  <div>
                    <input type='text' placeholder='Enter Username' />
                  </div>
                  <div>
                    <input type='password' placeholder='Enter Password' />
                  </div>
                  <div>
                    <input type='submit' />
                  </div>
                </form>
              </SignInDiv>
            </SignInForm>
            <SignUpForm><div>Sign Up Form</div></SignUpForm>
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

const SignInDiv = styled.div`
  box-sizing: border-box;
  width: 80%;
  min-height: 80%;
  padding: 15px;
`;

const Heading = styled.h1`
  font-size: 37px;
`;

export default LoginApp
