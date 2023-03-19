import React from 'react'
import { LinksData } from './LinksData'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Links = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - リンク集</title>
        </Helmet>
        <h1 className='main-title-pos'>Links</h1>
        <ul className='links-pos'>
          {
            LinksData.map((link,index)=>(
              <div key={index} className='link'>
                <li className='link-name'>
                  <a href={link.URL} target="_blank" rel="noopener noreferrer">{link.SiteName}</a>{"  - " + link.User + "さん"}
                </li>
                <li className='link-description'>{link.Description}</li>
              </div>
            ))
          }
        </ul>
        <p>～ 当サイトはリンクフリーです ～</p>
      </HelmetProvider>
    </>
  )
}

export default Links