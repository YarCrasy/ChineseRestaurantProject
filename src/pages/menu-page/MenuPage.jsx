import DishCard from "../../components/dish-card/DishCard";
import "./MenuPage.css";
import PropTypes from 'prop-types';

function MenuPage(props) {
    const dishes = props.dishes;

    // Group dishes by category
    const groupedDishes = dishes.reduce((acc, dish) => {
        if (!acc[dish.category]) {
            acc[dish.category] = [];
        }
        acc[dish.category].push(dish);
        return acc;
    }, {});

    return (
        <main className="menu-page">
            {Object.keys(groupedDishes).map((category) => (
                <section key={category} className="menu-category">
                    <h2>{category}</h2>
                    <div className="dish-list">
                        {groupedDishes[category].map((dish) => (
                            <DishCard dish={dish} key={dish.id} />
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
}

MenuPage.propTypes = {
    dishes: PropTypes.array.isRequired,
};

export default MenuPage;