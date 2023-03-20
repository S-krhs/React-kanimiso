import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ</title>
        </Helmet>
        <h1 className='main-title-pos'>Home</h1>
        <h2>鋭意作成中</h2>
      </HelmetProvider>
  )

export default Home