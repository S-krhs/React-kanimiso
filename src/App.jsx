import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Links from './components/Links'
import Sidebar from './components/Sidebar'
import Diary from './components/Diary'
import Illustrations from './components/Illustrations'
import UnderConstruction from './components/UnderConstruction'

const App = () => {

  return (
    <Router>
      <div className="App">
        <div className='HeaderPos'><Header /></div>
        <div className='SidebarPos'><Sidebar /></div>

        <Routes>
          <Route path="/" element={ <div className='MainPos'><Home /></div> }/>
          <Route path="/diary" element={ <div className='MainPos'><Diary /></div> }/>
          <Route path="/links" element={ <div className='MainPos'><Links /></div> }/>
          <Route path="/under-construction" element={ <div className='MainPos'> <UnderConstruction /> </div> }/>
          <Route path="/illusts" element={<div className='MainPos'><Illustrations /></div>} />
        </Routes>

      </div> 
    </Router>
  )
}

export default App
