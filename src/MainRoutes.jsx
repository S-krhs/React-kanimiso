import { useRoutes } from "react-router-dom"
import { useState } from 'react'
import AdminDummy from './components/admin_dummy/AdminDummy'
import Diary from './components/diary/Diary'
import Games from './components/games/Games'
import Hidden from './components/hidden/Hidden'
import Home from './components/home/Home'
import Links from './components/links/Links'
import MemoApp from './components/memo/MemoApp'
import Memo from './components/memo/Memo'
import Works from './components/works/Works'
import MemoList from './components/memo/MemoList'
import MemoPost from './components/memo/MemoPost'
import NoMemo from './components/memo/NoMemo'
import firstEntry from './components/memo/FirstEntry'

const MainRoutes = ({unityProvider}) => {
  const [entries,setEntries] = useState([firstEntry,]);

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/diary', element: <Diary /> },
    { path: '/memo',
      element: <MemoApp entries={entries} setEntries={setEntries}/>,
      children:[
        { path: '', element: <MemoList entries={entries}/> },
        { path: 'entry/:id', element: <Memo entries={entries} setEntries={setEntries}/> },
        { path: 'post', element: <MemoPost entries={entries} setEntries={setEntries}/> },
        { path: '*', element: <NoMemo /> },
      ]
    },
    { path: '/links', element: <Links /> },
    { path: '/works', element: <Works /> },
    { path: '/games', element: <Games unityProvider={unityProvider}/> },
    { path: '/hidden', element: <Hidden /> },
    { path: '/admin-dummy', element: <AdminDummy /> }
  ]);

  return(routes)
}

export default MainRoutes;