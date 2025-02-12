import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import NotFound from './pages/not-found-page/NotFound'
import './App.css'
import MainPage from './pages/main-page/MainPage'


function App() {

	return (
		<>
			<Header />

			<Router>
				<Routes>
					<Route path="/MainPage" element={<MainPage />} />
					<Route path="/404" element={<NotFound />} />
				</Routes>
			</Router>
			
			<Footer />
		</>
	)
}

export default App
