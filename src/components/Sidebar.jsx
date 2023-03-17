import React from 'react'
import { Link } from "react-router-dom"
import { SidebarMainLink, SidebarOtherPageLink } from './SidebarData'
import Icon from "../assets/sidebar-profile-icon.png"

const Sidebar = () => {
  return (
    <>
        <div className='sidebar-profile'>
            <div className='my-name'>
                <ruby>倶楽橋<rt>くらはし</rt></ruby>&nbsp;/&nbsp;しぇんこ
            </div>
            <div className='my-icon'>
                <img className='my-icon-img' alt="" src={Icon} />
            </div>            
        </div>
        <nav>
            <ul className='sidebar-link'>
                <li className='headline'>
                    Main Contents
                </li>
                <div className='rows'>
                    {
                        SidebarMainLink.map((value,index)=>(
                            <li className='row' key={index}>
                                <Link to={value.link} >{value.title}</Link>
                            </li>
                        ))
                    }
                <li className='row'>工事中</li>
                </div>
            </ul>
            <ul className='sidebar-link'>
                <li className='headline'>
                    Links
                </li>
                <div className='rows'>
                    {
                        SidebarOtherPageLink.map((value,index)=>(
                            <li className='row' key={index}>
                                <a href={value.link} target="_blank" rel="noopener noreferrer">{value.title}</a>
                            </li>
                        ))
                    }
                </div>
            </ul>
            <div className='margin-test'></div>
            <div className='hidden'>
                <Link to="hidden" >.</Link>
            </div>
        </nav>
    </>
  )
}

export default Sidebar