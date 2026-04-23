import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import RootLayout from './layout/RootLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import FriendDetail from './pages/FriendDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/timeline',
        element: <h2>Timeline</h2>,
      },
      {
        path: '/stats',
        element: <h2>Stats</h2>,
      },
      {
        path: '/frienddetail/:id',
        element: <FriendDetail />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
