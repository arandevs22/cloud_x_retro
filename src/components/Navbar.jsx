import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'

function Navbar() {


    return (
        <div>
            <nav data-uk-navbar data-uk-sticky className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <button type="button" data-uk-toggle="target: #side-menu">
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                    <div id="side-menu" data-uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            <ul className="uk-nav" data-uk-nav>
                                <li className="uk-active">
                                    <Link to={'/'}>
                                        <span className="material-symbols-outlined sideMenu uk-margin-right">
                                            home
                                        </span>
                                        <span className="menu-text">
                                            Inicio
                                        </span>
                                    </Link>
                                </li>
                                <li className="uk-active">
                                    <a href="">
                                        <span className="material-symbols-outlined sideMenu uk-margin-right">
                                            favorite
                                        </span>
                                        <span className="menu-text">
                                            Mis Favoritos
                                        </span>
                                    </a>
                                </li>
                                <li className="uk-parent uk-active">
                                    <a href="#">
                                        <span className="material-symbols-outlined sideMenu uk-margin-right">
                                            sports_esports
                                        </span>
                                        <span className="menu-text">
                                            Consolas
                                        </span>
                                        <span data-uk-nav-parent-icon></span>
                                    </a>
                                    <ul className="uk-nav-sub">
                                        <li className="uk-margin-small-bottom">
                                            <Link to={'/consoles/super-nintendo'}>
                                                <span class="material-symbols-outlined uk-margin-right sideMenu">
                                                    gamepad
                                                </span>
                                                <span>
                                                    Super Nintendo
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/game-boy-advance'}>
                                                <span className="material-symbols-outlined uk-margin-right sideMenu">
                                                    gamepad
                                                </span>
                                                <span>
                                                    Game Boy Advance
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <hr />
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img className='logo' src={Logo} alt="" />
                    </div>
                </div>
                <div className="uk-navbar-right">
                    <a className='uk-button menu uk-link-reset' href="http://action_search">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </a>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;