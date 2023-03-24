import React from 'react'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { useUnityContext } from "react-unity-webgl";
import Sidebar from './components/menu/Sidebar'
import MainRoutes from './MainRoutes'
import Marquee from './components/marquee/Marquee'
import Topbar from './components/menu/Topbar'

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const { unityProvider, unload } = useUnityContext({
    loaderUrl: "../unity-build/Build/Breakout.loader.js",
    dataUrl: "../unity-build/Build//Breakout.data.unityweb",
    frameworkUrl: "../unity-build/Build//Breakout.framework.js.unityweb",
    codeUrl: "../unity-build/Build//Breakout.wasm.unityweb",
    streamingAssetsUrl: "../unity-build/StreamingAssets",
  });
  
  const unityUnload = async(navigate,location,event) =>{
    if(location.pathname === "/games"){
      event.preventDefault();
      await unload();
      navigate(event.target.pathname);
    }
  }


  return(
    <div className="App">
      <Router>
        <div className='header'><Marquee /></div>
          {!isMobile && <div className='sidebar'><Sidebar unityUnload={unityUnload} /></div>}
          {isMobile && <div className='topbar'><Topbar unityUnload={unityUnload}/></div>}
        <div className='main'><MainRoutes unityProvider={unityProvider} /></div>
      </Router>
    </div>
  )
}

export default App
