//library imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//component imports
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

//page imports
import MainPage from './pages/main-page/MainPage'
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

			<Router>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<MainPage dishes={DISHES} />} />
					<Route path="/MainPage" element={<MainPage dishes={DISHES} />} />
				</Routes>
			</Router>

			<Footer />
		</>
	)
}

export default App
