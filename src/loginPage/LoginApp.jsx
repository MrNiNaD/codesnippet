import React from 'react';
import GlobalStyle from './asset/GlobalStyle';

function LoginApp() {
  return (
    <>
      <GlobalStyle />
      <section className="auth">
        <div className="sign_in">
          <button>Sign In</button>
        </div>
        <div className="sign_up">
          <button>Sign Up</button>
        </div>
        <div className="trimmer">
          <div className="container">
            <div className="sign_in_form"><span>Sign In Form</span></div>
            <div className="sign_up_form"><span>Sign Up Form</span></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginApp
