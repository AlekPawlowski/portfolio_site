import { Fragment, useEffect, useState } from 'react';
import TechStack from './views/TechStack/TechStack.view';
import Contact from './views/Contact/Contact.contact';
function App() {
    return (
        <Fragment>
            <TechStack />
            <Contact />
        </Fragment>
    )
}

export default App
