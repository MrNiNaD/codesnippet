import React, { useRef, useState } from 'react';
import GlobalStyle from './asset/GlobalStyle';
import styled from 'styled-components';
import Textbox1 from './components/Textbox1';
import { Link, BrowserRouter } from 'react-router-dom';
import SignUpComp from './components/SignUpComp';

function LoginApp() {
  const [login, setLoginDetail] = useState({});

  const trimmer = useRef(null);
  const trimmerContainer = useRef(null);

  const signUpClicked = () => {
    trimmer.current.classList.add("shift");
    trimmerContainer.current.classList.add("switch");
  }

  const signInClicked = () => {
    trimmer.current.classList.remove("shift");
    trimmerContainer.current.classList.remove("switch");
  }

  const loginDetails = (event) => {
    setLoginDetail(prevState => {
      setLoginDetail({
        ...prevState,
        [event.name] : event.value
      })
    })
  }

  return (
      <BrowserRouter>
        <GlobalStyle />
        <Auth>
          <Toggle>
            <div>
              <span>Click on Sign In Button to switch to Sign In Page</span>
              <button onClick={signInClicked}>Sign In</button>
            </div>
          </Toggle>
          <Toggle>
            <div>
              <span>Click on Sign Up Button to switch to Sign Up Page</span>
              <button onClick={signUpClicked}>Sign Up</button>
            </div>
          </Toggle>
          <Trimmer ref={trimmer}>
            <TrimmerContainer ref={trimmerContainer}>
              <SignInForm>
                <SignInDiv>
                  <Heading>Sign In</Heading>
                  <form onChange={(event) => loginDetails(event.target)}>
                    <Textbox1
                      type='text'
                      placeholder='Username'
                      name='username'
                    />
                    <Textbox1
                      type='password'
                      placeholder='Password'
                      name='password'
                    />
                    <ForgotPass>Forgot password?</ForgotPass>
                    <Submit>
                      <input type='submit' />
                    </Submit>
                  </form>
                </SignInDiv>
              </SignInForm>
              <SignUpForm>
                <div>
                  <Heading>Sign Up Form</Heading>
                  <SignUpComp />
                </div>
              </SignUpForm>
            </TrimmerContainer>
          </Trimmer>
        </Auth>
      </BrowserRouter>
  )
}

const pri = '#396A85';

const Heading = styled.h1`
  padding-bottom: 26px;
  font-size: 37px;
`;

const Auth = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
`;

const Toggle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${pri};
  justify-content: center;

  div {
    text-align: center;
  }

  span {
    display: block;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
  }

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 9999px;
    margin-top: 5px;
    background-color: #fff;
    color: ${pri};
    font-weight: 900;
    cursor: pointer;

    &:focus {
      outline: none
    }
  }
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

const TrimmerContainer = styled.div`
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

const SignUpForm = styled(SignInForm)`
  overflow-y: auto;
  
  div {
    width: 95%;
    height: 95%;
  }
  ${Heading} {
    text-align: center;
  }
`;

const SignInDiv = styled.div`
  box-sizing: border-box;
  width: 50%;
  min-height: 50%;
  padding: 15px;
`;

const Submit = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;

  input {
    padding: 10px 20px;
    border: none;
    border-radius: 9999px;
    background-color: ${pri};
    color: #fff;
    font-size: 17px;
    font-weight: 900;

    &:focus {
      outline: none;
    }
  }
`;

const ForgotPass = styled(Link)`
  padding-top: 10px;
  display: block;
  color: ${pri};
  font-size: 12px;
  text-decoration: none;
`;

export default LoginApp
