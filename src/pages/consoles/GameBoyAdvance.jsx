import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import SubNav from '../../components/SubNav';
//elemento que se dibuja en el DOM
const GameBoyAdvance = () => {

    const { gamesGba } = useLoaderData();
    console.log(gamesGba);

    return (

        <div>
            <Navbar />
            <div className="uk-container uk-margin-top uk-margin-bottom" data-uk-filter="target: .js-filter">
                <SubNav />
                <ul className="js-filter uk-child-width-1-2 uk-text-center uk-grid-small" data-uk-grid>
                    {gamesGba.length > 0 ? (
                        gamesGba.map((game) => (
                            <li data-color={game.genre} key={game.id}>
                                <Link to={`/consoles/game-boy-advance/${game.id}`}>
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

export default GameBoyAdvance;

//Consumo de API
export const loaderGba = async () => {
    const res = await fetch('https://apiretrogame-production.up.railway.app/api/games/')
    const gamesGba = await res.json();

    return { gamesGba };
}