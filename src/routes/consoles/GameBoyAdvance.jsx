import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";


function GameBoyAdvance() {
    return (
        <div>
            <Navbar />
            <div className="uk-container uk-margin-top" data-uk-filter="target: .js-filter">
                <ul className="uk-subnav uk-subnav-pill">
                    <li data-uk-filter-control="[data-color='shooter']">
                        <a href="#">
                            Shooter
                        </a>
                    </li>
                    <li data-uk-filter-control="[data-color='plataforma']">
                        <a href="#">
                            Plataforma
                        </a>
                    </li>
                    <li data-uk-filter-control="[data-color='peleas']">
                        <a href="#">
                            Peleas
                        </a>
                    </li>
                    <li data-uk-filter-control="[data-color='rpg']">
                        <a href="#">
                            Rpg
                        </a>
                    </li>
                    <li data-uk-filter-control="[data-color='carreras']">
                        <a href="#">
                            Carreras
                        </a>
                    </li>
                </ul>
                <ul className="js-filter uk-child-width-1-2 uk-text-center uk-grid-small" data-uk-grid>
                    <li id="metal-slug-advance" data-color="shooter">
                        <Link to={'/game-boy-advance/metal-slug-advance'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/29ab124d059e51600744303ec829069e.jpg" alt="" />
                        </Link>
                    </li>
                    <li id="castlevania-aria-of-sorrow" data-color="plataforma">
                        <Link to={'/game-boy-advance/metal-slug-advance'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a9fcbba7da26095ce5010a39b8a36509.jpg" alt="" />
                        </Link>
                    </li>
                    <li id="dragon-ball-avance-adventure" data-color="peleas">
                        <Link to={'/game-boy-advance/metal-slug-advance'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a7843ff15ebf9f9b7ceda39eb8b1f117.jpg" alt="" />
                        </Link>
                    </li>
                    <li id="fire-emblem-the-sacred-stones" data-color="rpg">
                        <Link to={'/game-boy-advance/metal-slug-advance'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/f3fd691d421ff0115dfc5310d4d3e701.jpg" alt="" />
                        </Link>
                    </li>
                    <li id="kirby-nightmare-in-dream-land" data-color="plataforma">
                        <Link to={'/game-boy-advance/metal-slug-advance'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/4ae5a92484155bfad3c7629a192244fe.jpg" alt="" />
                        </Link>
                    </li>
                    <li id="the-legend-of-zelda-the-minish-cap" data-color="rpg">
                        <Link to={'/game-boy-advance/metal-slug-advance'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a687f78b9842c87225e74921765feb1b.jpg" alt="" />
                        </Link>
                    </li>
                    <li id="mario-kart-super-circuit" data-color="carreras">
                        <Link to={'/game-boy-advance/metal-slug-advance'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/83d788e65786046542c9354d17b92450.jpg" alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GameBoyAdvance; 