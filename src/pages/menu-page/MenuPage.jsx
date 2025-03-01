import DishCard from "../../components/dish-card/DishCard";
import "./MenuPage.css";

function MenuPage(props) {
    const dishes = props.dishes;


    return (
        <main className="menu-page">
            {dishes.map((dish, index) => (
                <DishCard dish={dish} key={index} />
            ))}
        </main>
    );
}

export default MenuPage;