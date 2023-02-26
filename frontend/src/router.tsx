import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import ErrorPage from './error-page';
import { Profile, loader as profileLoader } from './routes/profile';
import Login from './routes/login';
import Register from './routes/register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'profile',
        element: <Profile />,
        loader: profileLoader,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);