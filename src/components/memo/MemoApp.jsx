import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from "react-router-dom"


const MemoApp = ({entries,setEntries}) => (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - メモ帳</title>
        </Helmet>
        
        <h1 className='main-title-pos'>メモ帳</h1>
        <p>日記とやってることはだいたい同じのブログもどき。エントリを集めて君だけの最強の日記を作ろう！</p>
        <div className='entry-pos'><Outlet entries={entries} setEntries={setEntries}/></div>
      </HelmetProvider>
  )

export default MemoApp