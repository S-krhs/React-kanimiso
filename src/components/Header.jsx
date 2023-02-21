import React from 'react'
import Marquee from "react-fast-marquee"

const Header = () => {
  return(
    <header className='Header'>
      <Marquee speed="60" pauseOnHover="true" gradient="">
          <div className="gaming">
              <strong>
                  <h2><span className='TitleSpace'>ここはくらはしのサイト「かにみそナックルカーブ」です。</span></h2>
              </strong>
          </div>
      </Marquee>
    </header>    
  )
}


export default Header