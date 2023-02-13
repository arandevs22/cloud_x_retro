import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";


function GameBoyAdvance() {
    return (
        <div>
            <Navbar />
            <div className="uk-container uk-margin-top" data-uk-filter="target: .js-filter">
                <ul className="uk-subnav uk-subnav-pill">
                    <li className="uk-active" data-uk-filter-control>
                        <a href="#">Todos</a>
                    </li>
                    <li data-uk-filter-control="[data-color='shooter']">
                        <a href="#">
                            Shooter
                        </a>
                    </li>
                </ul>
                <ul className="js-filter uk-child-width-1-3 uk-text-center uk-grid-small" data-uk-grid>
                    <li data-color="shooter">
                        <Link to={'/game-boy-advance/metal-slug-advance'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/29ab124d059e51600744303ec829069e.jpg" alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GameBoyAdvance; 