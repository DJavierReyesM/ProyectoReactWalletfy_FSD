import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from '@components/Layout.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@pages/home/index.tsx'
import Form from '@pages/events/form'
import { store } from '@store/index';
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />
      }
      
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
