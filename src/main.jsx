import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import GameBoyAdvance from './routes/consoles/GameBoyAdvance';
import GamePage from './routes/Game';
import ErrorPage from './error-page';
import SuperNintendo from './routes/consoles/SuperNintendo';
import './index.css'

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
    children: [
      {
        path: 'games/:gameid',
        element: <GamePage />
      },
    ],
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
