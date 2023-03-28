import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from "react-router-dom"


const MemoApp = () => (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - メモ帳</title>
        </Helmet>
        
        <div className='main-title-pos'>
          <h1>メモ帳</h1>
        </div>
        <div className='main-text-pos'>
          <p>エントリを集めて君だけの最強の日記を作ろう！</p>
        </div>
        <div className='entry-pos'><Outlet /></div>
      </HelmetProvider>
  )

export default MemoApp