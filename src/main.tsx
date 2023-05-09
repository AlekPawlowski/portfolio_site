import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Menu from "./views/Menu/Menu.menu";
import './globalStyles/main.style.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Menu />
        <App />
    </BrowserRouter>
)
