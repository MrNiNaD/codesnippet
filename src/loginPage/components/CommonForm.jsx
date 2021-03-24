import React, { useState } from 'react';
import Textbox from './Textbox1';

const CommonForm = (props) => {

  const [arr] = useState([1,2,3,4,5]);
  // const signInFont='20px';
  return (
    <>
      {
        arr.map((val, index) => {
          return (
            <Textbox
              type='text'
              placeholder={`name${val}`}
              name={`name${val}`}
              fontSize={'13px'}
            />
          )
        }
        )
      }
    </>
  )
}

export default CommonForm
