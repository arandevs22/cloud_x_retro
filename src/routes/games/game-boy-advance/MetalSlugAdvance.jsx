import Navbar from "../../../components/Navbar";

export default function MetalSlugAdvance() {
    return (
        <div>
            <Navbar />
            <div className="uk-inline uk-margin-bottom">
                <img src="https://images.launchbox-app.com/158d45de-507b-4124-9917-a4c90d6cca91.jpg" alt="" />
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/66410adefc38da1e9486483597c15518.png" alt="" />
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-clearfix uk-margin-bottom">
                    <div className="uk-float-left">
                        <span className="game-title-text">Metal Slug Advance</span>
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
                                star_half
                            </span>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-bottom">
                    <a href="go:gm01">
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
                        <img className="cover" src="https://images.launchbox-app.com/ec4d3a66-9ea4-4c6b-b239-6267d16c7b85.png" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/4851da83-ed3a-43b3-81a2-e5b1178253fc.png" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/24a538b6-0a2f-47a9-ae0f-3cdb220cad22.png" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://images.launchbox-app.com/fba646f5-28d6-4f12-afe3-1c2eb70343bb.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

