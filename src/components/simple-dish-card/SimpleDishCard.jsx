import "./SimpleDishCard.css";

function SimpleDishCard(prop) {
    let dish = prop.dish;
    return (
        <div className="simple-dish-card">
            <img src={dish.image} alt={dish.name} className="dish-img" />
            <h3 className="dish-name">{dish.name}</h3>
            <p className="dish-description">{dish.description}</p>
        </div>
    );
}

export default SimpleDishCard;