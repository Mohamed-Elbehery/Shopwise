import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import { Home, Notfound } from "../pages"
import { Suspense } from 'react'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<h1 className="text-primary font-bold text-3xl">Loading...</h1>}> <Home /> </Suspense>,
      },  
      {
        path: "*",
        element: <Suspense fallback={<h1 className="text-primary font-bold text-3xl">Loading...</h1>}> <Notfound /> </Suspense>
      }
    ]
  }
])