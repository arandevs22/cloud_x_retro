import { useLoaderData } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import { Link } from "react-router-dom";
import GoTop from "../components/GoTop.js";

const Games = () => {

    const { game } = useLoaderData();


    return (
        <>
            <div>
                <Navbar />
                <div className="uk-container uk-margin-top">
                    <ul className="uk-child-width-1-3 uk-grid-small" data-uk-grid>
                        {game.map((item) => (
                            <Link to={`/games/id/${item.id}`} key={item.id}>
                                <li>
                                    <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fjuegos%2Fposter%2F${item.id}.jpg?alt=media&token=47065a24-8b97-4b14-9aae-17168b675d7e`} alt={item.title} />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <GoTop />
        </>
    )
}

export default Games;


export const loaderGamesPage = async () => {
    const res = await fetch('https://retro-game.onrender.com/api/games/game-boy-advance/');

    const game = await res.json();

    return { game };
}