export default function SubNav() {
    return (
        <ul className="uk-subnav uk-subnav-pill">
            <li data-uk-filter-control="[data-color='shooter']">
                <a href="#">
                    shooter
                </a>
            </li>
            <li data-uk-filter-control="[data-color='plataforma']">
                <a href="#">
                    plataforma
                </a>
            </li>
            <li data-uk-filter-control="[data-color='peleas']">
                <a href="#">
                    peleas
                </a>
            </li>
            <li data-uk-filter-control="[data-color='rpg']">
                <a href="#">
                    rpg
                </a>
            </li>
            <li data-uk-filter-control="[data-color='carreras']">
                <a href="#">
                    carreras
                </a>
            </li>
            <li data-uk-filter-control="[data-color='deportes']">
                <a href="#">
                    deportes
                </a>
            </li>
        </ul>
    )
}