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
import Games from './components/Games'

const App = () => {
  
  return (
    <Router>
      <div className="App">
        <div className='Header'><Header /></div>
        <div className='Sidebar'><Sidebar /></div>

        <Routes>
          <Route path="/" element={ <div className='Main'><Home /></div> }/>
          <Route path="/diary" element={ <div className='Main'><Diary /></div> }/>
          <Route path="/links" element={ <div className='Main'><Links /></div> }/>
          <Route path="/under-construction" element={ <div className='Main'> <UnderConstruction /> </div> }/>
          <Route path="/works" element={<div className='Main'><Illustrations /></div>} />
          <Route path="/games" element={<div className='Main'><Games /></div>} />
        </Routes>

      </div> 
    </Router>
  )
}

export default App
