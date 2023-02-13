import Navbar from "../../components/Navbar";

function MetalSlugAdvance() {
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
                <div className="uk-margin-bottom">
                    <span className="game-title-text">Metal Slug Advance</span>
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
                <div>
                    <span className="game-sinopsis">
                        Acaba de comenzar un campo de entrenamiento de supervivencia para los nuevos reclutas del Halcón Peregrino, donde los reclutas deben sobrevivir en una isla sin nombre con suministros y armamento limitados. Sin embargo, un gran dirigible comienza a sobrevolar la isla, mientras las tropas del general Morden...
                    </span>
                </div>
            </div>
        </div>
    )
}


export default MetalSlugAdvance;