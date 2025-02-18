import SimpleDishCard from "../../components/simple-dish-card/SimpleDishCard";
import Carousel from "../../components/carrousel/Carousel";
import "./HomePage.css";

function HomePage(prop) {
    const simpleCards = prop.dishes.map((dish, index) => (
        <SimpleDishCard dish={dish} key={index} />
    ));

    return (
        <main>
            <section id="section-0">
                <h2>川闽福馆<br></br>CHUAN MIN FUISION</h2>
            </section>
            <section id="section-1">
                <h2>Our Best Sellers</h2>
                <Carousel contentList={simpleCards}/>
            </section>
        </main>
    );
}

export default HomePage;