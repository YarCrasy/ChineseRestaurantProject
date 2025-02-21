import DishCard from "../../components/dish-card/DishCard";
import "./MenuPage.css";

function MenuPage(props) {
    const dishes = props.dishes;
    const sections = [];
    const categoriesMap = {};

    for (let i = 0; i < dishes.length; i++) {
        const dish = dishes[i];
        const normalizedCategory = dish.category.trim().toLowerCase();
        
        if (!categoriesMap[normalizedCategory]) {
            categoriesMap[normalizedCategory] = {
                originalName: dish.category,
                dishes: []
            };
            sections.push({
                category: normalizedCategory,
                originalName: dish.category,
                dishes: []
            });
        }
        
        const categoryIndex = sections.findIndex(
            sec => sec.category === normalizedCategory
        );
        sections[categoryIndex].dishes.push(dish);
    }

    return (
        <main>
            {sections.map((section, index) => (
                <section 
                    key={section.category} 
                    id={`section-${index}`}
                    className="menu-section"
                >
                    <h2>{section.originalName}</h2>
                    <div className="category-dishes">
                        {section.dishes.map(dish => (
                            <DishCard dish={dish} key={dish.id} />
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
}

export default MenuPage;