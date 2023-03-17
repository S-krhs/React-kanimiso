import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Links from './components/Links'
import Sidebar from './components/Sidebar'
import Diary from './components/Diary'
import Illustrations from './components/Illustrations'
import Games from './components/Games'
import Hidden from './components/Hidden';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <div className='header'><Header /></div>
          <div className='sidebar'><Sidebar /></div>

          <Routes>
            <Route path="/" element={ <div className='main'><Home /></div> }/>
            <Route path="/diary" element={ <div className='main'><Diary /></div> }/>
            <Route path="/links" element={ <div className='main'><Links /></div> }/>
            <Route path="/works" element={<div className='main'><Illustrations /></div>} />
            <Route path="/games" element={<div className='main'><Games /></div>} />
            <Route path="/hidden" element={<div className='main'><Hidden /></div>} />
          </Routes>

        </div> 
      </Router>
    </>
  )
}

export default App
