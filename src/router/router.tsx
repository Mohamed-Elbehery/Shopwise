import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import { Home, Login, Notfound, ProductDetails, Signup } from "../pages"
import { Suspense } from 'react'
import { Loading } from "../components"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Suspense fallback={<Loading className={"load-in"} />}> <Login /> </Suspense>,
      },
      {
        path: "signup",
        element: <Suspense fallback={<Loading className={"load-in"} />}> <Signup /> </Suspense>,
      },
      {
        path: ":id",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <Suspense fallback={<Loading className={"load-in"} />}> <Notfound /> </Suspense>
      },
    ]
  }
])