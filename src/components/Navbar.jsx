import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'

function Navbar() {


    return (
        <div>
            <nav data-uk-navbar data-uk-sticky className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <button type="button" data-uk-toggle="target: #side-menu">
                        <span className="material-symbols-outlined menu">
                            menu
                        </span>
                    </button>
                    <div id="side-menu" data-uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            <ul className="uk-nav" data-uk-nav>
                                <li>
                                    <Link to={'/'}>
                                        <span className="material-symbols-outlined sideMenu uk-margin-right">
                                            home
                                        </span>
                                        <span className="menu-text">
                                            Inicio
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/games'}>
                                        <span className="material-symbols-outlined sideMenu uk-margin-right">
                                            videogame_asset
                                        </span>
                                        <span className="menu-text">
                                            Todos los juegos
                                        </span>
                                    </Link>
                                </li>
                                <li className="uk-parent">
                                    <a href="#">
                                        <span className="material-symbols-outlined sideMenu uk-margin-right">
                                            sports_esports
                                        </span>
                                        <span className="menu-text">
                                            Generos
                                        </span>
                                        <span data-uk-nav-parent-icon></span>
                                    </a>
                                    <ul className="uk-nav-sub">
                                        <li className="uk-margin-small-bottom">
                                            <Link to={'/games/genre/shooter'}>
                                                <span>
                                                    Shooter
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="uk-margin-small-bottom">
                                            <Link to={'/games/genre/plataforma'}>
                                                <span>
                                                    Plataforma
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <hr />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='uk-navbar-center'>
                    <img className='logo' src={Logo} alt="" />
                </div>
                <div className="uk-navbar-right">
                    <a className='uk-button menu uk-link-reset' href="http://action_search">
                        <span className="material-symbols-outlined menu">
                            search
                        </span>
                    </a>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;