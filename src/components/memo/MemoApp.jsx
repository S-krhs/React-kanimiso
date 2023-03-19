import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from "react-router-dom"
import MemoList from './MemoList';

const MemoApp = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - メモ帳</title>
        </Helmet>
        
        <h1 className='main-title-pos'>メモ帳</h1>
        <p>ブログもどき</p>
        <Outlet />
      </HelmetProvider>
    </>
  )
}

export default MemoApp