import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import { Home, Login, Notfound, Signup } from "../pages"
import { Suspense } from 'react'
import SignleProduct from "../pages/SignleProduct"

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
        path: "login",
        element: <Suspense fallback={<h1 className="text-primary font-bold text-3xl">Loading...</h1>}> <Login /> </Suspense>,
      },
      {
        path: "signup",
        element: <Suspense fallback={<h1 className="text-primary font-bold text-3xl">Loading...</h1>}> <Signup /> </Suspense>,
      },
      {
        path: ":id",
        element: <Suspense fallback={<h1 className="text-primary font-bold text-3xl">Loading...</h1>}> <SignleProduct /> </Suspense>,
      },
      {
        path: "*",
        element: <Suspense fallback={<h1 className="text-primary font-bold text-3xl">Loading...</h1>}> <Notfound /> </Suspense>
      }
    ]
  }
])