import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Router
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
// Redux
import { Provider } from 'react-redux'
import store from './features/store/store.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
      </Provider>
  </React.StrictMode>,
)
