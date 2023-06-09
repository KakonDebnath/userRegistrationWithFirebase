import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import AuthProviders from './providers/AuthProviders';
import Orders from './components/Orders/Orders';
import PrivateRoutes from './components/routes/PrivateRoutes';
import UserProfile from './components/UserProfile/UserProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/order", element: <PrivateRoutes><Orders /></PrivateRoutes> },
      { path: "/user-profile", element: <PrivateRoutes><UserProfile/></PrivateRoutes> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
