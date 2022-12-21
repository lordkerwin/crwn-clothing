import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/navbar.component";
import { Fragment } from "react";

const Layout = () => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </Fragment>
    );
};

export default Layout;
