import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';


export default function Menu(): JSX.Element {
    return (<Fragment>
        <nav className="">
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About me</Link>
            <Link to='/skils'>Tech stack</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
        <Outlet />
    </Fragment>)
}