function Navbar() {


    return (
        <div>
            <nav data-uk-navbar data-uk-sticky className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <button type="button" data-uk-toggle="target: #side-menu">
                        <span class="material-symbols-outlined sideMenu">
                            menu
                        </span>
                    </button>
                    <div id="side-menu" data-uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            <ul className="uk-nav" data-uk-nav>
                                <li className="uk-active">
                                    <a href="">
                                        <span className="material-symbols-outlined sideMenu uk-margin-right">
                                            home
                                        </span>
                                        <span className="menu-text">
                                            Inicio
                                        </span>
                                    </a>
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
                                            <a href="#">
                                                <span class="material-symbols-outlined uk-margin-right sideMenu">
                                                    gamepad
                                                </span>
                                                <span>
                                                    Super Nintendo
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="material-symbols-outlined uk-margin-right sideMenu">
                                                    gamepad
                                                </span>
                                                <span>
                                                    Game Boy Advance
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <hr />
                            </ul>
                        </div>
                    </div>
                    <span className="bar-title">Cloud X Retro</span>
                </div>
                <div className="uk-navbar-right">
                    <span class="material-symbols-outlined sideMenu">
                        search
                    </span>
                    <span class="material-symbols-outlined sideMenu">
                        account_circle
                    </span>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;