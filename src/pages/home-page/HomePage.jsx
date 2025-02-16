import SimpleDishCard from "../../components/simple-dish-card/SimpleDishCard";
import Carrousel from "../../components/carrousel/Carrousel";
import "./HomePage.css";

function HomePage(prop) {
    const slides = prop.dishes.map((dish, index) => (
        <SimpleDishCard dish={dish} key={index} />
    ));

    
    return (
        <main>
            <section id="section-1">
                <h2>Our Best Sellers</h2>
                <Carrousel slides={slides} />
            </section>
        </main>
    );
}

export default HomePage;