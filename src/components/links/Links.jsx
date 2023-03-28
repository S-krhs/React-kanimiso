import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LinksData from './LinksData'

const Links = () => (
    <HelmetProvider>
        <Helmet>
          <title>かにみそナックルカーブ - リンク集</title>
        </Helmet>
        <div className='main-title-pos'>
          <h1>リンク集</h1>
        </div>
        <ul className='links-pos'>
          {
            LinksData.map((link)=>(
              <div key={link.id} className='link'>
                <li className='link-name'>
                  <span><a href={link.URL} target="_blank" rel="noopener noreferrer">{link.SiteName}</a></span>
                  <span>{`  - ${  link.User  }さん`}</span>
                </li>
                <li className='link-description'>{link.Description}</li>
              </div>
            ))
          }
        </ul>
        <div className='main-text-pos'>
          <p>～ 当サイトはリンクフリーです ～</p>
        </div>
      </HelmetProvider>
  )

export default Links