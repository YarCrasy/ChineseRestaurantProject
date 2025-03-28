import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '/imgs/icon-imgs/logo.png';
import userIcon from '/imgs/icon-imgs/user-icon.svg';
import menuIcon from '/imgs/icon-imgs/header-menu-icon.svg';
import initializeMenu from './HeaderMenuBehaviour';
import UserAuth from '../user-authentification/UserAuth';
import setLocalization from '../../services/localization';
import LangDropdown from '../lang-dropdown/LangDropdown';
import { auth } from '../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function Header({ onLanguageChange }) {
    const [showUserAuth, setShowUserAuth] = useState(false);
    const [selectedLang, setSelectedLang] = useState('en');
    const [user, setUser] = useState(null);

    useEffect(() => {
        initializeMenu();
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        document.documentElement.lang = lang;
        onLanguageChange(lang); // Propaga el idioma al componente padre
    };

    const handleUserProfileClick = () => {
        if (user) {
            window.location.href = "/UserProfile";
        } else {
            setShowUserAuth(!showUserAuth);
        }
    };

    return (
        <header>
            <nav className="nav">
                <a href="/home" title="go to the home page">
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
                        <a href="/menu">{setLocalization("header.menu", selectedLang)}</a>
                        <a href="/news">{setLocalization("header.news", selectedLang)}</a>
                        <a href="/contact">{setLocalization("header.contact", selectedLang)}</a>

                        <LangDropdown 
                            selectedLang={selectedLang} 
                            onLanguageChange={handleLanguageChange} 
                        />

                        <button className="user-profile" 
                            title={user ? setLocalization("userHeaderIcon.profile", selectedLang) : setLocalization("userHeaderIcon.login", selectedLang)}
                            onClick={handleUserProfileClick}>
                            <div className="logo-container">
                                <img 
                                    src={user?.photoURL || userIcon} 
                                    alt="User Icon" 
                                    className="user-img" 
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {showUserAuth && <UserAuth onClose={() => setShowUserAuth(false)} />}
            </nav>
        </header>
    );
}
Header.propTypes = {
    onLanguageChange: PropTypes.func.isRequired,
};

export default Header;