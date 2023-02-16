import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import SubNav from '../../components/SubNav';
//elemento que se dibuja en el DOM
const NintendoDs = () => {

    const { nintendoDs } = useLoaderData();
    console.log(nintendoDs);

    return (

        <div>
            <Navbar />
            <div className="uk-container uk-margin-top uk-margin-bottom" data-uk-filter="target: .js-filter">
                <SubNav />
                <ul className="js-filter uk-child-width-1-2 uk-text-center uk-grid-small" data-uk-grid>
                    {nintendoDs.length > 0 ? (
                        nintendoDs.map((game) => (
                            <li data-color={game.genre} key={game.id}>
                                <Link to={`/games/nintendo-ds/id/${game.id}`}>
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

export default NintendoDs;

//Consumo de API
export const loaderDs = async () => {
    const res = await fetch('https://apiretrogame-production.up.railway.app/api/games/nintendo-ds/')
    const nintendoDs = await res.json();

    return { nintendoDs };
}