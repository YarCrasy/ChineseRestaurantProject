//library imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

//component imports
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from './components/nav-bar/NavBar';

//page imports
import HomePage from './pages/home-page/HomePage'
import NotFound from './pages/not-found-page/NotFound'

//style imports
import './App.css'
import MenuPage from './pages/menu-page/MenuPage';
import ContactPage from './pages/contact-page/ContantPage';


function App() {
    const DISHES = [
        {
            name: "Dish 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            price: "$10",
            img: "/src/assets/icon-imgs/logo.png",
        },
        {
            name: "Dish 2",
            description: "Lorem ipsum dolor sit amet",
            price: "$20",
            img: "/src/assets/icon-imgs/logo.png",
        },
        {
            name: "Dish 3",
            description: "consectetur adipiscing elit sed do eiusmod tempor",
            price: "$30",
            img: "/src/assets/icon-imgs/logo.png",
        },
        {
            name: "Dish 4",
            description: "consectetur adipiscing elit sed do eiusmod tempor",
            price: "$30",
            img: "/src/assets/icon-imgs/logo.png",
        },
        {
            name: "Dish 5",
            description: "consectetur adipiscing elit sed do eiusmod tempor",
            price: "$30",
            img: "/src/assets/icon-imgs/logo.png",
        },

    ];

    // Add IntersectionObserver to reveal sections when visible
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1 })

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section)
        })
    }, [])

	return (
		<>
			<Header />
            <NavBar />
			<Router>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<HomePage dishes={DISHES} />} />
					<Route path="/home" element={<HomePage dishes={DISHES} />} />
                    <Route path="/menu" element={<MenuPage dishes={DISHES} />} />
                    <Route path="/contact" element={<ContactPage/>} />
				</Routes>
			</Router>

			<Footer />
		</>
	)
}

export default App
