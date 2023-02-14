import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import GameBoyAdvance from './routes/consoles/GameBoyAdvance';
import ErrorPage from './error-page';
import SuperNintendo from './routes/consoles/SuperNintendo';
import './index.css'
import MetalSlugAdvance from './routes/games/game-boy-advance/MetalSlugAdvance';
import CastlevaniaAriaOfSorrow from './routes/games/game-boy-advance/CastlevaniaAriaOfSorrow';
import DragonBallAdvanceAdventure from './routes/games/game-boy-advance/DragonBallAdvanceAdventure';
import NintendoDs from './routes/consoles/NintendoDs';
import MarioKartDs from './routes/games/nintendo-ds/MarioKartDs';

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
    path: '/game-boy-advance/castlevania-aria-of-sorrow',
    element: <CastlevaniaAriaOfSorrow />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/game-boy-advance/dragon-ball-advance-adventure',
    element: <DragonBallAdvanceAdventure />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/consoles/super-nintendo',
    element: <SuperNintendo />,
    errorElement: <ErrorPage />
  },
  {
    path: '/nintendo-ds',
    element: <NintendoDs />,
    errorElement: <ErrorPage />
  },
  {
    path: '/nintendo-ds/mario-kart-ds',
    element: <MarioKartDs />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
