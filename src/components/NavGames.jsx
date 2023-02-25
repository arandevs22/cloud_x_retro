import Logo from '../assets/logo.svg'

function NavGames() {

    const backbutton = () => {
        history.back()
    }

    return (
        <div>
            <nav data-uk-navbar data-uk-sticky className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <button type="button" onClick={backbutton} >
                        <span className="material-symbols-outlined menu">
                            arrow_back
                        </span>
                    </button>
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


export default NavGames;