import { Fragment, useContext } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MenuElement } from './MenuElement.menu';

export default function Menu(): JSX.Element {
    const location = useLocation();
    console.log(location);
    // return (<section id="menu_box">
    return (<Fragment>
        <nav>
            <MenuElement name="Home page" path="/" location={location.pathname} />
            <MenuElement name="About me" path="/aboutme" location={location.pathname} />
            <MenuElement name="Experience" path="/Experience" location={location.pathname} />
            <MenuElement name="Tech stack" path="/skils" location={location.pathname} />
            <MenuElement name="Contact" path="/contact" location={location.pathname} />
        </nav>
        <Outlet />
        {/* </section>) */}
    </Fragment>)
}