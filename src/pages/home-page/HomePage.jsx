import { SimpleDishCard } from "../../components/simple-dish-card/SimpleDishCard";
import "./HomePage.css";

function HomePage(prop) {
    return (
        <main>
            <h1>Welcome to the Main Page</h1>
            <section className="simple-menu-section" id="section-0">
                {prop.dishes.map((dish, index) => (
                    <SimpleDishCard dish={dish} key={index} />
                ))}
            </section>
            <section className="simple-menu-section" id="section-1">
                {prop.dishes.map((dish, index) => (
                    <SimpleDishCard dish={dish} key={index} />
                ))}
            </section>
            <section className="simple-menu-section" id="section-2">
                {prop.dishes.map((dish, index) => (
                    <SimpleDishCard dish={dish} key={index} />
                ))}
            </section>
        </main>
    );
}

export default HomePage;