import { useLoaderData, Link } from 'react-router-dom'
import NavGames from '../components/NavGames.jsx';

const GameDetail = () => {

    const { game } = useLoaderData()

    return (
        <>
            <NavGames />
            <div className='uk-margin-bottom'>
                <div className="uk-position-relative">
                    <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-primary uk-margin-bottom" data-src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fjuegos%2Fbackground%2F${game.id}.jpg?alt=media&token=93bdab67-7064-4b6f-8cd3-8e0de9f3d0b6`} data-uk-img="loading: eager">
                    </div>
                    <div className="uk-position-cover uk-overlay-primary"></div>
                    <div className="uk-overlay uk-position-center">
                        <img className="game-logo" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fjuegos%2Flogo%2F${game.logo}?alt=media&token=47065a24-8b97-4b14-9aae-17168b675d7e`} alt="" />
                    </div>
                </div>
                <div>
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
                        <div>
                            <Link to={game.reference}>
                                <button className="uk-width-1-1 play-btn uk-border-rounded uk-margin-bottom">
                                    JUGAR AHORA
                                </button>
                            </Link>
                            {/* <Link to={game.rom}>
                            <button className="uk-width-1-1 play-btn uk-border-rounded uk-margin-bottom">
                                <span className="uk-margin-right" data-uk-icon="cloud-download"></span>
                                DESCARGAR ROM
                            </button>
                        </Link> */}
                        </div>
                        <div>
                            <span className='game-sinopsis'>
                                {game.sinopsis}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default GameDetail;

export const loaderGames = async ({ params }) => {
    const res = await fetch(`https://retro-game.onrender.com/api/games/game-boy-advance/id/${params.id}`);

    const game = await res.json();
    return { game };
}