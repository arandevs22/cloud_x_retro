import { useRouteError } from "react-router-dom";
import imageError from './assets/404_error.png'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="uk-text-center uk-margin-top" id="error-page">
            <h1>Oops!</h1>
            <p>Lo sentimos, ha ocurrido un error inesperado</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img className="error-image" src={imageError} alt="" />
        </div>
    )

}