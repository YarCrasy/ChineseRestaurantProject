import { SimpleDishCard } from "../../components/simple-dish-card/SimpleDishCard";
import "./MainPage.css";

function MainPage({ dishes }) {
    return (
        <main>
            <h1>Welcome to the Main Page</h1>
            <p>hola</p>
            <section id="simple-menu-section">
                {dishes.map((dish, index) => (
                    <SimpleDishCard dish={dish} key={index} />
                ))}
            </section>
        </main>
    );
}

export default MainPage;