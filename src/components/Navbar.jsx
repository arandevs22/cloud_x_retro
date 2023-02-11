function Navbar() {


    return (
        <div>
            <nav data-uk-navbar data-uk-sticky className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                    <span className="bar-title">Cloud X Retro</span>
                </div>
                <div className="uk-navbar-right">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;