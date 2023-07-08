import { useEffect } from 'react'
import { Footer, Header, Newsletter } from "./components"
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(() => {
    window.scroll({top: 0});
  })

  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
