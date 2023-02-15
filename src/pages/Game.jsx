import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar';


const Game = () => {

    const { game } = useLoaderData()

    return (
        <>
            <Navbar />
            <div>
                <div className="uk-inline uk-margin-bottom">
                    <img src={game.background} alt="" />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="uk-overlay uk-position-center">
                        <img className="game-logo" src={game.logo} alt="" />
                    </div>
                </div>
                <div className="uk-container">
                    <div className="uk-clearfix uk-margin-bottom">
                        <div className="uk-float-left">
                            <span className="game-title-text">{game.title}</span>
                            <div>
                                <span className="material-icons checked">
                                    star
                                </span>
                                <span className="material-icons checked">
                                    star
                                </span>
                                <span className="material-icons checked">
                                    star
                                </span>
                                <span className="material-icons checked">
                                    star
                                </span>
                                <span className="material-icons checked">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-bottom">
                        <a href={game.refence}>
                            <button className="uk-width-1-1 play-btn uk-border-rounded uk-margin-bottom">
                                <span className="uk-margin-right" data-uk-icon="play-circle"></span>
                                JUGAR AHORA
                            </button>
                        </a>
                        <button className="uk-width-1-1 play-btn uk-border-rounded">
                            <span className="uk-margin-right" data-uk-icon="heart"></span>
                            AÑADIR A MIS FAVORITOS
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Game;

export const loaderGame = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/${params.id}`);

    const game = await res.json();
    return { game };
}