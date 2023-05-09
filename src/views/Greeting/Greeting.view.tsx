import { Outlet, Link } from 'react-router-dom';

export function Greeting() {
    return <section id="greeting">
        <p>Hi, My name is</p>
        <h1>Aleksander Pawlowski.</h1>
        <p>
            As a front-end developer, I have a deep passion for creating beautiful and interactive user interfaces through coding.
        </p>
        <Link to='/contact'>Contact</Link>
    </section>
}