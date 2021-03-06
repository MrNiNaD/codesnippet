import React, { useRef } from 'react';
import GlobalStyle from './asset/GlobalStyle';

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
      <section className="auth">
        <div className="sign_in">
          <button onClick={signInClicked}>Sign In</button>
        </div>
        <div className="sign_up">
          <button onClick={signUpClicked}>Sign Up</button>
        </div>
        <div className="trimmer" ref={trimmer}>
          <div className="container" ref={container}>
            <div className="sign_in_form"><span>Sign In Form</span></div>
            <div className="sign_up_form"><span>Sign Up Form</span></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginApp
