import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';
import styled from 'styled-components';

const Cards = ({data}) => {
  return (
    <List>
      <Thumbnail>
        <img src="http://placehold.it/1000x500/20D3F0" title="Content Title" alt="Content Title"/>
        {data.type === 'Video' && <Play />}
      </Thumbnail>
      <Title>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, consequuntur?</Title>
      <span className="card_type">{data.type}</span>
    </List>
  )
}

const List = styled.li`
  width: 32%;
  height: 300px;
  margin-bottom: 15px;
  border-radius: 10px;
  position: relative;
  box-shadow: 1px 1px 5px 3px #00000033; 
  overflow: hidden;

  .card_type {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 10px;
    color: #808080;
  }
`;

const Title = styled.span`
  padding: 10px;
  display: block;
  color: #808080;
  font-size: 12px;
`;

const Thumbnail = styled.div`
  height: 150px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Play = styled(AiFillCaretRight)`
  padding: 5px;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  transform: translate(-50%, -50%);
`;

export default Cards
