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

function App() {
    const DISHES = [
        {
            name: "Dish 1",
            description: "Description 1",
            price: "$10",
            img: "https://via.placeholder.com/150",
        },
        {
            name: "Dish 2",
            description: "Description 2",
            price: "$20",
            img: "https://via.placeholder.com/150",
        },
        {
            name: "Dish 3",
            description: "Description 3",
            price: "$30",
            img: "https://via.placeholder.com/150",
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
				</Routes>
			</Router>

			<Footer />
		</>
	)
}

export default App
