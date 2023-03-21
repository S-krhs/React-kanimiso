import React from 'react'
import './App.css'
import { BrowserRouter as Router} from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import Sidebar from './components/menu/Sidebar'
import MainRoutes from './MainRoutes'
import Marquee from './components/marquee/Marquee'
import Topbar from './components/menu/Topbar'

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return(
    <div className="App">
        <Router>
          <div className='header'><Marquee /></div>
          {!isMobile && <div className='sidebar'><Sidebar /></div>}
          {isMobile && <div className='topbar'><Topbar /></div>}
          <div className='main'><MainRoutes /></div>
        </Router>
       </div>
  )
}

export default App
