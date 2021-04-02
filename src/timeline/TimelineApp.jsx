import React from 'react';
import Image from './images/logo.png';
import styled from 'styled-components';
import GlobalStyle, { Wrapper } from './asset/GlobalStyle';
import Cards from './components/Cards';

const TimelineApp = () => {
  const article = {
    type: 'Article'
  }
  const video = {
    type: 'Video'
  }
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
            {/* http://placehold.it/1000x500/270458 */}
            <ul>
              <Cards data={article} />
              <Cards data={video} />
              <Cards data={article} />
              <Cards data={video} />
              <Cards data={article} />
              <Cards data={video} />
              <Cards data={article} />
              <Cards data={video} />
            </ul>
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
    right: 10px;
    transform: translate(-50%, -50%);

    a {
      color: #292D65;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const Main = styled.main`
  background-color: #F5F5F5;

  ${Wrapper} {
    padding-top: 30px;
    background-color: #fff;
  }

  ul {
    margin: 0 30px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: flex-start;

    li:not(:nth-child(3n + 1)) {
      margin-left: 10px;
    }
  }
`;

export default TimelineApp
