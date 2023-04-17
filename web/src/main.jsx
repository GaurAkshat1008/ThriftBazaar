import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { ChangePassword } from './Components/ChangePassword';
import { EmailSent } from './Components/EmailSent';
import User from './Components/User';
import { SearchResults } from './Components/SearchResults';
import Product from './Components/Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/sent",
    element: <EmailSent />
  },
  {
    path: "/profile",
    element: <User />,
  },
  {
    path: "/change-password/:token",
    element: <ChangePassword />,
  },
  {
    path:"/search/:query",
    element: <SearchResults />
  },
  {
    path: "/item/:id",
    element: <Product />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
    </ChakraProvider>
  </React.StrictMode>,
)
