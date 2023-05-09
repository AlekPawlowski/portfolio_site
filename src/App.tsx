import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import TechStack from './views/TechStack/TechStack.view';
import Contact from './views/Contact/Contact.contact';
import { Greeting } from './views/Greeting/Greeting.view';
import AboutMe from './views/AboutMe/AboutMe.view';
import Menu from './views/Menu/Menu.menu';

function App(): JSX.Element {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setTransistionStage("fadeOut");
        }
    }, [location, displayLocation]);

    return (
        <section
            id="main_section"
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransistionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route index path="" element={<Greeting />} />
                <Route path="aboutMe" element={<AboutMe />} />
                <Route path="skils" element={<TechStack />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </section>
    )
}

export default App
