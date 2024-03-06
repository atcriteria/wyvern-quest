import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home.jsx'
import Error from './components/error.jsx'
import Guides from './components/guides.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
        }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
