import Navbar from "../../../components/Navbar";

export default function DragonBallAdvanceAdventure() {
    return (
        <div>
            <Navbar />
            <div className="uk-inline uk-margin-bottom">
                <img src="https://images.launchbox-app.com/457b9f42-0b17-41f1-9b0b-5cc855101602.jpg" alt="" />
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/f687a4f18a6d8e0ade28a558503bd998.png" alt="" />
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-clearfix uk-margin-bottom">
                    <div className="uk-float-left">
                        <span className="game-title-text">Dragon Ball: Advance Adventure</span>
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
                            <span className="material-icons-oulined checked">
                                star
                            </span>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-bottom">
                    <a href="go:gm03">
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
                        <img className="cover" src="https://images.launchbox-app.com/c32d8a97-eebc-49fb-8a45-f24a6d484da1.png" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/4c530af1-c6a8-456b-9b4e-9880b01f117d.png" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/61685be9-4056-4eed-b419-c4b51e3ed051.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

