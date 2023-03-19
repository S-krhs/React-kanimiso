import AdminDummy from './components/admin_dummy/AdminDummy'
import Diary from './components/diary/Diary'
import Games from './components/games/Games'
import Hidden from './components/hidden/Hidden'
import Home from './components/home/Home'
import Links from './components/links/Links'
import MemoApp from './components/memo/MemoApp'
import Memo from './components/memo/Memo'
import Works from './components/works/Works'
import { useRoutes } from "react-router-dom"

 const MainRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/diary', element: <Diary /> },
        { path: '/memo',
          element: <MemoApp />,
          children:[
            { path: 'entry/:id', element: <Memo /> },
            { path: 'post', element: <Memo /> },
        ]
        },
        { path: '/links', element: <Links /> },
        { path: '/works', element: <Works /> },
        { path: '/games', element: <Games /> },
        { path: '/hidden', element: <Hidden /> },
        { path: '/admin-dummy', element: <AdminDummy /> }
      ]);

    return(
        routes
    )
 }

 export default MainRoutes;