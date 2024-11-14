import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeScreen } from './home/home.screen';
import { AboutScreen } from './about/about.screen';
import { NotFoundScreen } from './404/not_found.screen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    errorElement: <NotFoundScreen />,
  },
  {
    path: '/about',
    element: <AboutScreen />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
