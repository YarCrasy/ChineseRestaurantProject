import { useState } from "react";
import PropTypes from "prop-types";
import "./DishCard.css";

function DishCard(props) {
    const [showPanel, setShowPanel] = useState(false);
    let dish = props.dish;

    const handleButtonClick = () => {
        setShowPanel(true);
    };

    return (
        <div className="dish-card">
            <div className="dish-id">
                <p>{dish.id}</p>
            </div>
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p className="dish-description">{dish.description}</p>
            <div className="bottom-container">
                <p className="price-tag">{dish.price}€</p>
                <button className="add-to-cart" onClick={handleButtonClick}>Buy</button>
            </div>
            {showPanel && (
                <div className="wip-panel">
                    <p>Work in progress</p>
                </div>
            )}
        </div>
    );
}
DishCard.propTypes = {
    dish: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default DishCard;