import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, } from "react-router-dom";

import TechStack from './views/TechStack/TechStack.view';
import Contact from './views/Contact/Contact.contact';
import { Greeting } from './views/Greeting/Greeting.view';
import AboutMe from './views/AboutMe/AboutMe.view';
import Menu from './views/Menu/Menu.menu';

function App(): JSX.Element {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
    const [afterAnimation, setAfterAnimation] = useState(false);

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setTransistionStage("fadeOut");
            setAfterAnimation(false)
        }
    }, [location, displayLocation]);

    return (
        <section
            id="main_section"
            className={`${transitionStage} ${afterAnimation ? "animation_end" : ''}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransistionStage("fadeIn");
                    setDisplayLocation(location);
                    setAfterAnimation(true);
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
