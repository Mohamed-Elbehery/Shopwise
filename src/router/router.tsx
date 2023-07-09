import App from "../App"
import { createBrowserRouter } from "react-router-dom"
import { Compare, Contact, Home, Login, Notfound, ProductDetails, Signup, Wishlist } from "../pages"
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
      // {
      //   path: "wishlist",
      //   element: <Suspense fallback={<Loading className={"load-in"} />}> <Wishlist /> </Suspense>
      // },
      // {
      //   path: "compare",
      //   element: <Suspense fallback={<Loading className={"load-in"} />}> <Compare /> </Suspense>
      // },
      // {
      //   path: "contact-us",
      //   element: <Suspense fallback={<Loading className={"load-in"} />}> <Contact /> </Suspense>
      // },
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