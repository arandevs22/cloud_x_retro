import { useLoaderData, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';


const GameDs = () => {

    const { game } = useLoaderData()

    return (
        <>
            <Navbar />
            <div>
                <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-margin-bottom" data-src={game.background} data-uk-img="loading: eager">
                    <img className="game-logo" src={game.logo} alt="" />
                </div>
                <div className="uk-container">
                    <div className="uk-clearfix uk-margin-bottom">
                        <div className="uk-float-left">
                            <div>
                                <span className="game-title-text">{game.title}</span>
                            </div>
                            <div>
                                <span className="game-genre-text">
                                    {game.genre} · {game.year}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-bottom">
                        <Link to={game.reference}>
                            <button className="uk-width-1-1 play-btn uk-border-rounded uk-margin-bottom">
                                <span className="uk-margin-right" data-uk-icon="play-circle"></span>
                                JUGAR AHORA
                            </button>
                        </Link>
                        <Link to={game.rom}>
                            <button className="uk-width-1-1 play-btn uk-border-rounded uk-margin-bottom">
                                <span className="uk-margin-right" data-uk-icon="cloud-download"></span>
                                DESCARGAR ROM
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default GameDs;

export const loaderGameDs = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/nintendo-ds/id/${params.id}`);

    const game = await res.json();
    return { game };
}