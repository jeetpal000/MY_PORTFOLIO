import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Layout from './layout/Layout'
import Project from './pages/Project'
import CustomCursor from './components/CustomCursor'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/projects",
            element: <Project />
          }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}

export default App