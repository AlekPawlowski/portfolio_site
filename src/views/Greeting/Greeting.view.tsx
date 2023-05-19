import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

export function Greeting() {
    useEffect(()=>{

    }, );
    return <section className="content_element" id="greeting">
        <h1>Hi, My name is</h1>
        <h2>Aleksander Pawłowski.</h2>
        <p>
            As a front-end developer, I have a deep passion for creating beautiful and interactive user interfaces through coding.
        </p>
        <button className="action_button">
            <Link to='/contact'>Contact</Link>
        </button>
    </section>
}