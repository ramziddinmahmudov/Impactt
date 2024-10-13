import './App.css'
import Layout from "./Layout/Layout.jsx"
import Home from "./Home/Home.jsx"
import Main from "./Main/Main.jsx"
import Section from "./Section/Section.jsx"
import Article from "./Article/Article.jsx"
import Footer from "./Footer/Footer.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {



  const router = createBrowserRouter([
    {

      element: <Layout/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/casestudies",
          element: <Main />,
        },
        {
          path: "/testimonials",
          element: <Section />,
        },
        {
          path:"/recentwork",
          element:<Article/>
        },
        {
          path:"/getintouch",
          element:<Footer/>
        }
      ],
    },

  ]);
  

  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App