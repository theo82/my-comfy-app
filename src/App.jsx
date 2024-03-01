import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages'

import { ErrorElement } from './components'

import { loader as landingLoader } from './pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
