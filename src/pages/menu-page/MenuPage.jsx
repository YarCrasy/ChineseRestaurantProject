import DishCard from "../../components/dish-card/DishCard";
import "./MenuPage.css";

function MenuPage(props) {
    const dishes = props.dishes;


    return (
        <main>
            {dishes.map((dish, index) => (
                <DishCard dish={dish} key={index} />
            ))}
        </main>
    );
}

export default MenuPage;