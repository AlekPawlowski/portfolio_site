import { Fragment, useContext, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MenuElement } from './MenuElement.menu';
/**
 * to do in the future
 * set menu as global context so in menu element there will be no need to pass showMenuHandler
 * its gonna be called inside menuElemenent without passing it
 * profit: train useContext and less code
 */
export default function Menu(): JSX.Element {
    const breakPoint = 1024; 
    const location = useLocation();

    const [currentWindowSize, setcurrentWindowSize] = useState(window.innerWidth);
    const [showHamburger, setShowHamburger] = useState(currentWindowSize < breakPoint);
    const [showMenu, setShowMenu] = useState(false);

    function showMenuHandler(): any {
        console.log('btnClick')
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        function resizeEvent(): void{
            setcurrentWindowSize(window.innerWidth);
            setShowHamburger(currentWindowSize < breakPoint);
        }
        window.onresize = () => resizeEvent();
    }, [currentWindowSize])
    return (<Fragment>
        {
            showHamburger 
                ? <button className={`hamburger_menu ${showMenu ? "active" : ""}`} onClick={showMenuHandler}>
                    <div className="hamburger_line top"></div>
                    <div className="hamburger_line middle"></div>
                    <div className="hamburger_line bottom"></div>
                </button> 
                : ""
        }
        <nav className={`${showMenu ? "active" : ""} ${showHamburger ? 'hamburger_nav' : ''}`}>
            <MenuElement onClick={showMenuHandler} name="Home page" path="/" location={location.pathname} />
            <MenuElement onClick={showMenuHandler} name="About me" path="/aboutme" location={location.pathname} />
            <MenuElement onClick={showMenuHandler} name="Experience" path="/Experience" location={location.pathname} />
            <MenuElement onClick={showMenuHandler} name="Tech stack" path="/skils" location={location.pathname} />
            <MenuElement onClick={showMenuHandler} name="Contact" path="/contact" location={location.pathname} />
        </nav>
        <Outlet />
        {/* </section>) */}
    </Fragment>)
}