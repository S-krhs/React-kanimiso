import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Diary = () => (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - 日記</title>
        </Helmet>
        <div className='main-title-pos'>
          <h1>Diary</h1>
        </div>
        <div className='main-text-pos'>
          <h2>準備中</h2>
        </div>
      </HelmetProvider>
  )

export default Diary