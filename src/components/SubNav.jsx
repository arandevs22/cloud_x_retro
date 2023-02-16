export default function SubNav() {
    return (
        <ul className="uk-subnav uk-subnav-pill">
            <li data-uk-filter-control="[data-color='Shooter']">
                <a href="#">
                    Shooter
                </a>
            </li>
            <li data-uk-filter-control="[data-color='Plataforma']">
                <a href="#">
                    Plataforma
                </a>
            </li>
            <li data-uk-filter-control="[data-color='Peleas']">
                <a href="#">
                    Peleas
                </a>
            </li>
            <li data-uk-filter-control="[data-color='Rpg']">
                <a href="#">
                    Rpg
                </a>
            </li>
            <li data-uk-filter-control="[data-color='Carreras']">
                <a href="#">
                    Carreras
                </a>
            </li>
        </ul>
    )
}