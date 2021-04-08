import React, {useState, useEffect} from 'react';
import Image from './images/logo.png';
import styled, { keyframes } from 'styled-components';
import GlobalStyle, { Wrapper } from './asset/GlobalStyle';
import Cards from './components/Cards';

const TimelineApp = () => {
  const arr = [
    {type: 'Article'},
    {type: 'Video'},
    {type: 'Article'},
    {type: 'Video'},
    {type: 'Article'},
    {type: 'Video'},
    {type: 'Article'},
    {type: 'Video'},
    {type: 'Article'},
    {type: 'Video'},
    {type: 'Article'},
    {type: 'Video'},
    {type: 'Article'},
    {type: 'Video'},
  ]

  const [payload, setPayload] = useState(arr)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

      if(scrollTop + clientHeight >= scrollHeight) {
        setLoader(true);
        setTimeout(() => {
          setPayload((prevState) => {
            return [
              ...prevState,
              ...arr
            ]
          });
          setLoader(false);
        }, 2000)
      }
    })
  }, [])

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
            <ul>
              {payload.map((data, index) => <Cards key={index} data={data} />)}
            </ul>
            {loader && <Loader><div/></Loader>}
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

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Loader = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;

  > div {
    border: 9px solid #80808077;
    border-radius: 50%;
    border-top: 8px solid #2E295A;
    width: 30px;
    height: 30px;
    animation: ${Spin} 2s linear infinite;
  }
  
`;

export default TimelineApp
