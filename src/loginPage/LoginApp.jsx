import React, { useRef, useState } from 'react';
import GlobalStyle from './asset/GlobalStyle';
import styled from 'styled-components';
import Textbox1 from './components/Textbox1';

function LoginApp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

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

  return (
    <>
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
                <form onChange={(event) => console.log(event.target.value)}>
                  <Textbox1
                    type='text'
                    placeholder='Username'
                  />
                  <Textbox1
                    type='password'
                    placeholder='Password'
                  />
                  <Submit>
                    <input type='submit' />
                  </Submit>
                </form>
              </SignInDiv>
            </SignInForm>
            <SignUpForm><div>Sign Up Form</div></SignUpForm>
          </TrimmerContainer>
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

const Toggle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #396A85;
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
    color: #396A85;
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

const SignUpForm = styled(SignInForm)``;

const SignInDiv = styled.div`
  box-sizing: border-box;
  width: 50%;
  min-height: 50%;
  padding: 15px;
`;

const Heading = styled.h1`
  padding-bottom: 26px;
  font-size: 37px;
`;

const Submit = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;

  input {
    padding: 10px 20px;
    border: none;
    border-radius: 9999px;
    background-color: #396A85;
    color: #fff;
    font-size: 17px;
    font-weight: 900;

    &:focus {
      outline: none;
    }
  }
`;

export default LoginApp
