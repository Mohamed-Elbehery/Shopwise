import { useEffect } from 'react'
import { Footer, Header, Newsletter } from "./components"
import { Outlet, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { pathname } = useParams();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [pathname])

  return (
    <>
      <Header />
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
