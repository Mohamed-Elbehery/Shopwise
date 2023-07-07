import { Footer, Header, Newsletter } from "./components"
import { Outlet } from 'react-router-dom'

function App() {
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
