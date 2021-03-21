import React, { useEffect } from 'react'

const CommonForm = (props) => {
  useEffect(() => {
    props.setState('test', 'test1');
  }, [])
  return (
    <div>
      {props.getState("test", "")}
      {console.log(props)}
    </div>
  )
}

export default CommonForm
