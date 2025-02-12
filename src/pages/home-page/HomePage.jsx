import { SimpleDishCard } from "../../components/simple-dish-card/SimpleDishCard";
import "./HomePage.css";

function HomePage(prop) {
    return (
        <main>
            <h1>Welcome to the Main Page</h1>
            <section id="simple-menu-section">
                {prop.dishes.map((dish, index) => (
                    <SimpleDishCard dish={dish} key={index} />
                ))}
            </section>
        </main>
    );
}

export default HomePage;