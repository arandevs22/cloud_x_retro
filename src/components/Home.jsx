function Home() {
    return (
        <div className="uk-margin-small-top">
            <div data-uk-slider className="uk-margin-left">
                <div className="uk-position-relative">
                    <div className="uk-margin-small-bottom">
                        <span>Juegos Recomendados</span>
                    </div>
                    <div className="uk-slider-container">
                        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid slider">
                            <li>
                                <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/b5403b2d202b8fe1db69b68b2c0c5e2b.jpg" alt="" />
                            </li>
                            <li>
                                <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/674e68d7f978c31eafc8e7a300ce9bc2.jpg" alt="" />
                            </li>
                            <li>
                                <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/981d50d64a8d5a7d90aa7eb49927e1b9.jpg" alt="" />
                            </li>
                            <li>
                                <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a4df7d4c60b0de8bbaf4859efff4368b.jpg" alt="" />
                            </li>
                            <li>
                                <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/b6999de3c9fa8d7b9419f684ea764b54.jpg" alt="" />
                            </li>
                            <li>
                                <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/7e686a8d7f92ab79acac5381454e31af.jpg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
            <div className="uk-margin-left" data-uk-slider>
                <div className="uk-clearfix uk-margin-small-bottom">
                    <div className="uk-float-right">
                        <span></span>
                    </div>
                    <div className="uk-float-left">
                        <span>Game Boy Advance</span>
                    </div>
                </div>
                <ul className="uk-slider-items uk-child-width-1-4 uk-grid slider">
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a9fcbba7da26095ce5010a39b8a36509.jpg" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a7843ff15ebf9f9b7ceda39eb8b1f117.jpg" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/f3fd691d421ff0115dfc5310d4d3e701.jpg" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/4ae5a92484155bfad3c7629a192244fe.jpg" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a687f78b9842c87225e74921765feb1b.jpg" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/83d788e65786046542c9354d17b92450.jpg" alt="" />
                    </li>
                    <li>
                        <img className="cover" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/29ab124d059e51600744303ec829069e.jpg" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;