import Navbar from "../../../components/Navbar";

export default function CastlevaniaAriaOfSorrow() {
    return (
        <div>
            <Navbar />
            <div className="uk-inline uk-margin-bottom">
                <img src="https://images.launchbox-app.com/642929a2-9a2d-40f7-ae02-a189959354be.png" alt="" />
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/fb647ca6672b0930e9d00dc384d8b16f.png" alt="" />
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-clearfix uk-margin-bottom">
                    <div className="uk-float-right">
                        <img className="game-box" src="https://images.launchbox-app.com/89290e22-37fe-41fa-8560-44ff1f539263.png" alt="" />
                    </div>
                    <div className="uk-float-left">
                        <span className="game-title-text">Castlevania Aria Of Sorrow</span>
                        <div>
                            <span className="material-icons checked">
                                star
                            </span>
                            <span className="material-icons checked">
                                star
                            </span>
                            <span className="material-icons checked">
                                star
                            </span>
                            <span className="material-icons checked">
                                star
                            </span>
                            <span className="material-icons checked">
                                star
                            </span>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-bottom">
                    <a href="go:gm02">
                        <button className="uk-width-1-1 play-btn uk-border-rounded uk-margin-bottom">
                            <span className="uk-margin-right" data-uk-icon="play-circle"></span>
                            JUGAR AHORA
                        </button>
                    </a>
                    <button className="uk-width-1-1 play-btn uk-border-rounded">
                        <span className="uk-margin-right" data-uk-icon="heart"></span>
                        AÑADIR A MIS FAVORITOS
                    </button>
                </div>
            </div>
            <div className="uk-margin-left uk-margin-bottom" data-uk-slider>
                <div className="uk-clearfix uk-margin-small-bottom">
                    <div className="uk-float-right">
                        <span></span>
                    </div>
                    <div className="uk-float-left">
                        <span>ScreenShots</span>
                    </div>
                </div>
                <ul className="uk-slider-items uk-child-width-1-2 uk-grid-small slide-cover" data-uk-grid>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/f9f57245-2f46-4075-b379-29277a1f36b8.png" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/bdcdd5cf-6cff-49b0-8c19-119431f6ec7b.png" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/092245fc-5988-4a92-b533-63c8cad742e3.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

