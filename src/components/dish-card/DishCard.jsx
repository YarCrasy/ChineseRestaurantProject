import "./DishCard.css";

function DishCard(props) {
    let dish = props.dish;
    return (
        <div className="dish-card">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
        </div>
    );
}

export default DishCard;