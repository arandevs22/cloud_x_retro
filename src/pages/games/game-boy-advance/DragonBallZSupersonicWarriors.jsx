import Navbar from "../../../components/Navbar";

export default function DragonBallZSupersonicWarriors() {
    return (
        <div>
            <Navbar />
            <div className="uk-inline uk-margin-bottom">
                <img src="https://images.launchbox-app.com/04ad67bc-f507-4bc4-956b-6b7ffc1f5ea1.jpg" alt="" />
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/d69768b3da745b77e82cdbddcc8bac98.png" alt="" />
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-clearfix uk-margin-bottom">
                    <div className="uk-float-left">
                        <span className="game-title-text">Dragon Ball Z: Supersonic Warriors</span>
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
                            <span className="material-symbols-outlined checked">
                                star_half
                            </span>
                            <span className="material-symbols-outlined checked">
                                star
                            </span>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-bottom">
                    <a href="go:gm05">
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
                        <img className="cover" src="https://images.launchbox-app.com/d8b9ce31-b963-425a-b86a-c3e3a0c7531f.png" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/738b2894-c142-4a3f-9bc9-7c4731885839.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

