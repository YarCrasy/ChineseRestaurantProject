import "./SimpleDishCard.css";

export function SimpleDishCard({ dish }) {
    return (
        <div className="simple-dish-card">
            <img src={dish.img} alt={dish.name} className="dish-img" />
            <h2 className="dish-name">{dish.name}</h2>
            <p className="dish-description">{dish.description}</p>
        </div>
    );
}