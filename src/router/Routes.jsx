import { createBrowserRouter } from 'react-router';
import RootLayout from './../layout/RootLayout';
import Home from './../pages/Home';
import Timeline from './../pages/Timeline';
import Stats from './../pages/Stats';
import FriendDetails from './../pages/FriendDetails';
import NotFound from './../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/timeline',
        element: <Timeline />,
      },
      {
        path: '/stats',
        element: <Stats />,
      },
      {
        path: '/friend/:id',
        element: <FriendDetails />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
