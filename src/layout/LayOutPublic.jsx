import { Outlet } from "react-router-dom"
import GoTop from "../components/GoTop";

const LayOutPublic = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LayOutPublic;