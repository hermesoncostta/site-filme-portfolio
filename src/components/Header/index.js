import React from "react";
import './Header.css';
import Logo from '../../assets/Images/logo.png';

export default ({ Blue }) => {
    return (
        <nav className={Blue ? 'Blue' : ''}>
            <a href="/" className="header--logo">
                <img src={Logo} />
            </a>
            <a href="/" className="header--plans">Planos</a>
            <a href="/" className="header--mylist">Minha Lista</a>
            <a href="/" className="header--login">Fazer Login</a>
        </nav>
    );
}