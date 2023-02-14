export default function SubNav() {
    return (
        <ul className="uk-subnav uk-subnav-pill">
            <li data-uk-filter-control="[data-color='shooter']">
                <a href="#">
                    Shooter
                </a>
            </li>
            <li data-uk-filter-control="[data-color='plataforma']">
                <a href="#">
                    Plataforma
                </a>
            </li>
            <li data-uk-filter-control="[data-color='peleas']">
                <a href="#">
                    Peleas
                </a>
            </li>
            <li data-uk-filter-control="[data-color='rpg']">
                <a href="#">
                    Rpg
                </a>
            </li>
            <li data-uk-filter-control="[data-color='carreras']">
                <a href="#">
                    Carreras
                </a>
            </li>
        </ul>
    )
}