import React from 'react'
import { Link } from "react-router-dom"
import { SidebarMainLink } from './SidebarData'
import Icon from "../assets/sidebar-profile-icon.png"

const Sidebar = () => {
  return (
    <>
        <div className='SidebarProfile'>
            <div className='MyName'>
                <ruby>倶楽橋<rt>くらはし</rt></ruby>&nbsp;/&nbsp;しぇんこ
            </div>
            <div className='MyIcon'>
                <img className='MyIconImg' alt="" src={Icon} />
            </div>            
        </div>
        <nav>
            <ul className='SidebarLink'>
                <li className='headline'>
                    Main Contents
                </li>
                {SidebarMainLink.map((value,index)=>(
                        <li className='row' key={index}>
                            <Link to={value.link} >{value.title}</Link>
                        </li>
                    ))}
            </ul>
            <div className='Margin-test'>hoge</div>
        </nav>
    </>
  )
}

export default Sidebar