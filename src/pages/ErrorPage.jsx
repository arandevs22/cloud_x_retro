import { Link, useRouteError } from "react-router-dom";
import imageError from '../assets/404_error.png'
import GoTop from "../components/GoTop";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <Navbar />
            <div className="uk-container uk-text-center uk-margin-top" id="error-page">
                <h1>Oops!</h1>
                <p>Lo sentimos, ha ocurrido un error inesperado</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <div>
                    <Link to={'/'}>Volver a inicio</Link>
                </div>
                <img className="error-image" src={imageError} alt="" />
            </div>
        </div>
    )

}