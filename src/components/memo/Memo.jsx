import React from 'react'
import { useParams } from 'react-router-dom';

const Memo = () => {
  const param = useParams();
  const id=param.id;
  return (
    <>
      <div>{id}</div>
    </>
    
  )
}

export default Memo