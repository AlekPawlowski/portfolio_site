import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TechStack from './views/TechStack/TechStack.view';
import Contact from './views/Contact/Contact.contact';
import { Greeting } from './views/Greeting/Greeting.view';
import AboutMe from './views/AboutMe/AboutMe.view';
import Menu from './views/Menu/Menu.menu';

function App() {
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Menu />}>
            <Route index path="" element={<Greeting />} />
            <Route path="aboutMe" element={<AboutMe />} />
            <Route path="skils" element={<TechStack />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
</BrowserRouter>
}

export default App
