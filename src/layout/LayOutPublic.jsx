import { Outlet } from "react-router-dom"

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