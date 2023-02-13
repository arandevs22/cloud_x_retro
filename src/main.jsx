import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import GameBoyAdvance from './routes/consoles/GameBoyAdvance';
import ErrorPage from './error-page';
import SuperNintendo from './routes/consoles/SuperNintendo';
import './index.css'
import MetalSlugAdvance from './routes/game-boy-advance/MetalSlugAdvance';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/game-boy-advance',
    element: <GameBoyAdvance />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/game-boy-advance/metal-slug-advance',
    element: <MetalSlugAdvance />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/consoles/super-nintendo',
    element: <SuperNintendo />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
