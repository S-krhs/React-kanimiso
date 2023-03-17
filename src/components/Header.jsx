import React from 'react'
import Marquee from "react-fast-marquee"

const Header = () => {
  return(
    <>
      <Marquee speed="60" pauseOnHover="true" gradient="">
          <div className="gaming">
              <strong>
                  <h2><span className='title-margin'>ここはくらはしのサイト「かにみそナックルカーブ」です。</span></h2>
              </strong>
          </div>
      </Marquee>
    </>    
  )
}


export default Header