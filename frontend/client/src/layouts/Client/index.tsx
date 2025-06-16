import { Outlet } from "react-router-dom"
import Footer from "../../common/layout/Footer"
import Header from "../../common/layout/Header"

export const DefaultLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}