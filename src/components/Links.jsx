import React from 'react'
import { LinksData } from './LinksData'

const Links = () => {
  return (
    <>
      <h1 className='MainTitlePos'>Links</h1>
      <ul className='LinksPos'>
        {
          LinksData.map((link,index)=>(
            <div key={index} className='Link'>
              <li className='LinkName'>
                <a href={link.URL}>{link.SiteName}</a>{"  - " + link.User + "さん"}
              </li>
              <li className='LinkDescription'>{link.Description}</li>
            </div>
          ))
        }
      </ul>
    </>
  )
}

export default Links