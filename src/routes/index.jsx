import { createBrowserRouter } from 'react-router-dom'
import LayOutPublic from '../layout/LayOutPublic';
import ErrorPage from '../pages/ErrorPage';
import GameDetail, { loaderGames } from '../pages/GameDetail';
import Plataforma, { loaderPlataforma } from '../pages/generos/Plataforma';
import Shooter, { loaderShooter } from '../pages/generos/Shooter';
import Home from '../pages/Home';



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
                path: '/games/id/:id',
                element: <GameDetail />,
                loader: loaderGames,
            },
            {
                path: '/games/genre/shooter',
                element: <Shooter />,
                loader: loaderShooter
            },
            {
                path: '/games/genre/plataforma',
                element: <Plataforma />,
                loader: loaderPlataforma
            },
        ]
    },

]);