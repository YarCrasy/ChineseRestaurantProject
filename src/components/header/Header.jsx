import './Header.css';
import logo from '../../assets/icon-imgs/logo.png';
import menuIcon from '../../assets/icon-imgs/header-menu-icon.svg';

function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo-img"/>
                    <h1 className="logo">Chuan Min Fusion</h1>
                </div>
                <button className="menu-toggle">
                    <img src={menuIcon} alt="Menu" className="menu-icon" />
                </button>
                <div className="nav-menu">
                    <div className="nav-links">
                        <a href="#menu">Menu</a>
                        <a href="#contact">Contact</a>
                        <div className="lang-dropdown">
                            <button className="dropdown-btn">EN ▼</button>
                            <div className="dropdown-content">
                                <a href="#" data-lang="en">English</a>
                                <a href="#" data-lang="es">Español</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

function initializeMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Cerrar menú al hacer click en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}
initializeMenu();