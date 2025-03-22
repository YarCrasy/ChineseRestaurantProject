//library imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

//style imports
import './App.css'

//component imports
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from './components/nav-bar/NavBar';
import CookiesPanel from './components/cookies-panel/CookiesPanel';
// import UserAuth from './components/user-authentification/UserAuth';

//page imports
import HomePage from './pages/home-page/HomePage'
import NotFound from './pages/not-found-page/NotFound'
import MenuPage from './pages/menu-page/MenuPage';
import ContactPage from './pages/contact-page/ContantPage';

//data imports
import dishesData from "./services/dishes.json";
import NewsPage from './pages/news-page/NewsPage';

function App() {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.8 })

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section)
        })
    }, [])

    return (
        <>
            <Header />
            <NavBar />

            {/* <UserAuth/> */}

            <Router>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<HomePage dishes={dishesData} />} />
                    <Route path="/home" element={<HomePage dishes={dishesData} />} />
                    <Route path="/menu" element={<MenuPage dishes={dishesData} />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    <Route path="/legal/privacy" element={<div>privacy</div>} />
                    <Route path="/legal/terms" element={<div>terms</div>} />

                </Routes>
            </Router>


            <CookiesPanel />
            <Footer />
        </>
    )
}

export default App
