//library imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
            description: "Description 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            price: "$10",
            img: "/assets/icon-imgs/lcj-icon.jpg",
        },
        {
            name: "Dish 2",
            description: "Description 2",
            price: "$20",
            img: "/assets/icon-imgs/logo.png",
        },
        {
            name: "Dish 3",
            description: "Description 3",
            price: "$30",
            img: "/assets/icon-imgs/logo.png",
        },

    ];
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
