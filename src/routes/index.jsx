import { createBrowserRouter } from 'react-router-dom'
import LayOutPublic from '../layout/LayOutPublic';
import GameBoyAdvance, { loaderGba } from '../pages/consoles/GameBoyAdvance';
import NintendoDs, { loaderDs } from '../pages/consoles/NintendoDs';
import SuperNintendo, { loaderSnes } from '../pages/consoles/SuperNintendo';
import ErrorPage from '../pages/ErrorPage';
import GameDs, { loaderGameDs } from '../pages/games/GameDs';
import GameGba, { loaderGameGba } from '../pages/games/GameGba';
import GameSnes, { loaderGameSnes } from '../pages/games/GameSnes';
import Home from '../pages/Home'



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOutPublic />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/games/game-boy-advance',
                element: <GameBoyAdvance />,
                loader: loaderGba
            },
            {
                path: '/games/game-boy-advance/id/:id',
                element: <GameGba />,
                loader: loaderGameGba
            },
            {
                path: '/games/nintendo-ds',
                element: <NintendoDs />,
                loader: loaderDs
            },
            {
                path: '/games/nintendo-ds/id/:id',
                element: <GameDs />,
                loader: loaderGameDs
            },
            {
                path: '/games/super-nintendo',
                element: <SuperNintendo />,
                loader: loaderSnes
            },
            {
                path: '/games/super-nintendo/id/:id',
                element: <GameSnes />,
                loader: loaderGameSnes
            }
        ]
    },

]);