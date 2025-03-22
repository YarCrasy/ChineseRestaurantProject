import DishCard from "../../components/dish-card/DishCard";
import "./MenuPage.css";
import PropTypes from 'prop-types';

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

MenuPage.propTypes = {
    dishes: PropTypes.array.isRequired,
};

export default MenuPage;