import { useEffect } from 'react';
import './Header.css';
import logo from '/icon-imgs/logo.png';
import menuIcon from '/icon-imgs/header-menu-icon.svg';
import initializeMenu from './HeaderMenuBehaviour';
import languageSelection from './LanguageSelection';

function Header() {
    useEffect(() => {
        initializeMenu();
        languageSelection();
    }, []);

    return (
        <header>
            <nav className="nav">

                <a href="/home">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo-img" />
                        <h1 className="logo">Chuan Min Fusion</h1>
                    </div>
                </a>

                <button className="menu-toggle">
                    <img src={menuIcon} alt="Menu" className="menu-icon" />
                </button>

                <div className="nav-menu">
                    <div className="nav-links">
                        <a href="/menu">Menu</a>
                        <a href="/contact">Contact</a>
                        <div className="lang-dropdown">
                            <button className="dropdown-btn">EN ▼</button>
                            <div className="dropdown-content">
                                <a data-lang="en">English</a>
                                <a data-lang="es">Español</a>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="user-profile">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>
                </button>


            </nav>
        </header>
    );
}

export default Header;