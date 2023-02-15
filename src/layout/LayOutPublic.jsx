import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayOutPublic = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LayOutPublic;