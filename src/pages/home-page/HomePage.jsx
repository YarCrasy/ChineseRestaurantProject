import SimpleDishCard from "../../components/simple-dish-card/SimpleDishCard";
import "./HomePage.css";

function HomePage(prop) {
    return (
        <main>
            <section className="best-seller-section" id="section-0">
                <h2>Welcome to the Main Page</h2>
                <div className="best-seller-content">
                    {prop.dishes.map((dish, index) => (
                        <SimpleDishCard dish={dish} key={index} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default HomePage;