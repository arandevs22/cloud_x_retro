import { Link, useLoaderData } from "react-router-dom";

const Shooter = () => {

    const { gamesShooter } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <div>
                <div className="uk-margin-bottom">
                    <nav data-uk-navbar data-uk-sticky className="uk-navbar-container">
                        <div className="uk-navbar-left">
                            <button type="button" className="uk-margin-right" onClick={backButton} >
                                <span className="material-symbols-outlined menu">
                                    arrow_back
                                </span>
                            </button>
                            <span className="genre-text">Juegos Shooter</span>
                        </div>
                    </nav>
                </div>
                <div className="uk-container">
                    <ul className="uk-child-width-1-3 uk-grid-small" data-uk-grid>
                        {gamesShooter.map((game) => (
                            <Link to={`/games/id/${game.id}`} key={game.id}>
                                <li>
                                    <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fjuegos%2Fposter%2F${game.id}.jpg?alt=media&token=47065a24-8b97-4b14-9aae-17168b675d7e`} alt={game.title} />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Shooter;


export const loaderShooter = async () => {
    const res = await fetch('https://retro-game.onrender.com/api/games/game-boy-advance/shooter');
    const gamesShooter = await res.json();

    return { gamesShooter };

}