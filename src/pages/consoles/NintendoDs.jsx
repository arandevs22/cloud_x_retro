import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SubNav from "../../components/SubNav";


export default function NintendoDs() {
    return (
        <div>
            <Navbar />
            <div className="uk-container uk-margin-top uk-margin-bottom" data-uk-filter="target: .js-filter">
                <SubNav />
                <ul className="js-filter uk-child-width-1-2 uk-text-center uk-grid-small" data-uk-grid>
                    <li id="mario-kart-ds" data-color="carreras">
                        <Link to={'/nintendo-ds/mario-kart-ds'}>
                            <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/3eed6d27b0b2dd008c1be88cce8245fc.jpg" alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}