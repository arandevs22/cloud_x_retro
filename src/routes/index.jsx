import { createBrowserRouter } from 'react-router-dom'
import LayOutPublic from '../layout/LayOutPublic';
import GameBoyAdvance, { loaderGba } from '../pages/consoles/GameBoyAdvance';
import ErrorPage from '../pages/error-page';
import Game, { loaderGame } from '../pages/Game';
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
                path: '/consoles/game-boy-advance',
                element: <GameBoyAdvance />,
                loader: loaderGba
            },
            {
                path: '/consoles/game-boy-advance/:id',
                element: <Game />,
                loader: loaderGame
            }
        ]
    },

]);