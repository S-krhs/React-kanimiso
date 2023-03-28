import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ</title>
        </Helmet>
        <div className='main-title-pos'>
          <h1>Home</h1>
        </div>
        <div className='main-text-pos'>
          <h2>鋭意作成中</h2>
        </div>
      </HelmetProvider>
  )

export default Home