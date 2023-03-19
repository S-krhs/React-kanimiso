import React from 'react'
import './App.css'
import { BrowserRouter as Router} from "react-router-dom"
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import MainRoutes from './MainRoutes'

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <div className='header'><Header /></div>
          <div className='sidebar'><Sidebar /></div>
          <div className='main'><MainRoutes /></div>
        </Router>
       </div> 
    </>
  )
}

export default App
