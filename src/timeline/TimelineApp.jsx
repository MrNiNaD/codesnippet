import React from 'react';
import Image from './images/logo.png';
import styled from 'styled-components';
import GlobalStyle, { Wrapper } from './asset/GlobalStyle';

const TimelineApp = () => {
  return (
    <>
      <GlobalStyle/>
      <Header>
        <Wrapper>
          <h1>
            <a href="/" title="TutEmpire">
              <img src={Image} alt="TutEmpire"/>
            </a>
          </h1>
          <nav>
            <a href="#">Sign-in</a>
          </nav>
        </Wrapper>
      </Header>
      <Main>
        <Wrapper>
            
        </Wrapper>
      </Main>
    </>
  )
}

const Header = styled.header`
  position: relative;
  z-index: 1;
  box-shadow: 0 5px 10px #00000077;

  ${Wrapper} {
    padding: 20px;
    display: flex;
    position: relative;
    justify-content: center;
  }

  h1 {
    width: 100px;
    height: 100px;


    img {
      width: 100%;
      height: 100%;
    }
  }

  nav {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    a {
      color: #292D65;
      text-decoration: none;
    }
  }
`;

const Main = styled.main`
  height: 100px;
  background-color: #F5F5F5;

  ${Wrapper} {
    background-color: #fff;
  }
`;

export default TimelineApp
