import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';


export default function Menu(): JSX.Element {
    return (<Fragment>
        <header>
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>O mnie</Link>
            <Link to='/skils'>Tech stack</Link>
            <Link to='/contact'>Kontakt</Link>
        </header>
        <Outlet />
    </Fragment>)
}