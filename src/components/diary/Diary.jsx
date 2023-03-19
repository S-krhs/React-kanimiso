import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Diary = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - 日記</title>
        </Helmet>
        <h1 className='main-title-pos'>Diary</h1>
        <h2>準備中</h2>
      </HelmetProvider>
    </>
  )
}

export default Diary