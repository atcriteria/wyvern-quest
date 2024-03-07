import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home.jsx'
import Error from './components/error.jsx'
import Guides from './components/guides.jsx'
import Upcoming from './components/upcoming.jsx'
import { determineOverflows, validateOverflows } from './util/overflows.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Stats from './components/stats.jsx'
import About from './components/about.jsx'

const handleScroll = e => {
  determineOverflows(e.target.scrollingElement);
}

const handleClick = e => {
  validateOverflows();
}

window.addEventListener("scroll", handleScroll)
window.addEventListener("click", handleClick)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:
      [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/guides",
          element: <Guides />
        },
        {
          path: "/leaderboard",
          element: <Stats />
        },
        {
          path: "/upcoming",
          element: <Upcoming />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
