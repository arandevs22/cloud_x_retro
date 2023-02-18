import { useLoaderData } from "react-router-dom";


const GamerBar = () => {

    const { game } = useLoaderData();

    <>
        <div className="uk-position-relative">
            <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-margin-bottom" data-src={game.background} data-uk-img="loading: eager">
                <img className="game-logo" src={game.logo} alt="" />
            </div>
            <div className="uk-position-top">
                <nav className="uk-nav-container uk-navbar-transparent" data-uk-navbar>
                    <ul className="uk-navbar-left">
                        <span>hola soy un boton</span>
                    </ul>
                </nav>
            </div>
        </div>
        <h1>hello</h1>
    </>
};

export default GamerBar;

export const loaderGameBar = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/id/${params.id}`);

    const game = await res.json();
    return { game };
}