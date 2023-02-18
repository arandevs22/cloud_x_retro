import { useLoaderData, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';


const GameGba = () => {

    const { game } = useLoaderData()

    const backbutton = () => {
        history.back()
    }

    return (
        <>
            <div className="uk-position-relative">
                <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-primary uk-margin-bottom" data-src={game.background} data-uk-img="loading: eager">
                </div>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src={game.logo} alt="" />
                </div>
                <div className="uk-position-top">
                    <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                        <div className='uk-navbar-left'>
                            <button onClick={backbutton}>
                                <span className="material-symbols-outlined menu">
                                    arrow_back_ios_new
                                </span>
                            </button>
                        </div>
                    </nav>
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

export default GameGba;

export const loaderGameGba = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/id/${params.id}`);

    const game = await res.json();
    return { game };
}