import "./SimpleDishCard.css";

function SimpleDishCard(prop) {
    return (
        <div className="simple-dish-card">
            <img src={prop.dish.img} alt={prop.dish.name} className="dish-img" />
            <h3 className="dish-name">{prop.dish.name}</h3>
            <p className="dish-description">{prop.dish.description}</p>
        </div>
    );
}

export default SimpleDishCard;