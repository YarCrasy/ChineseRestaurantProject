import { useEffect, useState } from 'react';
import './Header.css';
import logo from '/imgs/icon-imgs/logo.png';
import userIcon from '/imgs/icon-imgs/lcj-icon.jpg';
import menuIcon from '/imgs/icon-imgs/header-menu-icon.svg';
import initializeMenu from './HeaderMenuBehaviour';
import languageSelection from './LanguageSelection';
import UserAuth from '../user-authentification/UserAuth';

function Header() {
    const [showUserAuth, setShowUserAuth] = useState(false);

    useEffect(() => {
        initializeMenu();
        languageSelection();
    }, []);

    return (
        <header>
            <nav className="nav">
                <a href="/home"  title="go to the home page">
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
                        <a href="/news">News</a>
                        <a href="/contact">Contact</a>

                        <div className="lang-dropdown" title="work in progress">
                            <button className="dropdown-btn">EN ▼</button>
                            <div className="dropdown-content">
                                <a data-lang="en">English</a>
                                <a data-lang="es">Español</a>
                            </div>
                        </div>
                        
                        <button className="user-profile" title="work in progress"
                            onClick={() => setShowUserAuth(!showUserAuth)}>
                            <div className="logo-container">
                                <img src={userIcon} alt="Logo" className="logo-img" />
                            </div>
                        </button>
                    </div>
                </div>

                {showUserAuth && <UserAuth onClose={() => setShowUserAuth(false)} />}
            </nav>
        </header>
    );
}

export default Header;