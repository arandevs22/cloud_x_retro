import Navbar from "../../components/Navbar";

function MetalSlugAdvance() {
    return (
        <div>
            <Navbar />
            <div className="uk-inline uk-margin-bottom">
                <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/20877befbd58c865e224346e6b92d772.jpg" alt="" />
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/66410adefc38da1e9486483597c15518.png" alt="" />
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-margin-bottom">
                    <span className="game-title-text">Metal Slug Advance</span>
                </div>
                <div>
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
        </div>
    )
}


export default MetalSlugAdvance;