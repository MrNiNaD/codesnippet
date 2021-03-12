import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const [state, setstate] = useState({});
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(event.target.children);
      }}>
      <input name='add' type="text"/>
      <input name='add' type="text"/>
      <input name='add' type="text"/>
      <input type="submit" />
    </form>
  )
}

export default SignUpForm
