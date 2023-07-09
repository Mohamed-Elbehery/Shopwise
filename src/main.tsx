import ReactDOM from 'react-dom/client'
import './index.css'
// Router
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
// Redux
import { Provider } from 'react-redux'
import store from './features/store/store.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
