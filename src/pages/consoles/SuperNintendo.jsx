import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import SubNav from '../../components/SubNav';
//elemento que se dibuja en el DOM
const SuperNintendo = () => {

    const { gamesSnes } = useLoaderData();

    return (

        <div>
            <Navbar />
            <div className="uk-container uk-margin-top uk-margin-bottom" data-uk-filter="target: .js-filter">
                <SubNav />
                <ul className="js-filter uk-child-width-1-3 uk-child-width-1-5@m uk-child-width-1-6@l uk-text-center uk-grid-small" data-uk-grid>
                    {gamesSnes.length > 0 ? (
                        gamesSnes.map((game) => (
                            <li data-color={game.genre} key={game.id}>
                                <Link to={`/games/super-nintendo/id/${game.id}`}>
                                    <img className="cover" src={game.poster} alt="" />
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No games found</li>
                    )}

                </ul>
            </div>
        </div>
    );
};

export default SuperNintendo;

//Consumo de API
export const loaderSnes = async () => {
    const res = await fetch('https://apiretrogame-production.up.railway.app/api/games/super-nintendo/')
    const gamesSnes = await res.json();

    return { gamesSnes };
}