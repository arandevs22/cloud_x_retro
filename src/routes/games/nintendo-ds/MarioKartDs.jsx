import Navbar from "../../../components/Navbar";

export default function MarioKartDs() {
    return (
        <div>
            <Navbar />
            <div className="uk-inline uk-margin-bottom">
                <img src="https://images.launchbox-app.com/9c400ea9-9493-4753-8e6e-7e000fbee31e.jpg" alt="" />
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/b59c67bf196a4758191e42f76670ceba.png" alt="" />
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-clearfix uk-margin-bottom">
                    <div className="uk-float-left">
                        <span className="game-title-text">Mario Kart DS</span>
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
                            <span className="material-symbols-outlined checked">
                                star
                            </span>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-bottom">
                    <a href="go:gm04">
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
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/d0ca7fbb3967cf0852450ac7befa03ba.jpg" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/f89ec698c869dfe7a66ea29ebf99b354.jpg" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5ce61456fc3a97719e0f95910fe106b1.jpg" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

