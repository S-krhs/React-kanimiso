import React from 'react'
import './App.css'
import { BrowserRouter as Router} from "react-router-dom"
import Sidebar from './components/sidebar/Sidebar'
import MainRoutes from './MainRoutes'
import Marquee from './components/marquee/Marquee'

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <div className='header'><Marquee /></div>
          <div className='sidebar'><Sidebar /></div>
          <div className='main'><MainRoutes /></div>
        </Router>
       </div> 
    </>
  )
}

export default App
