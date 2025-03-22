import SimpleDishCard from "../../components/simple-dish-card/SimpleDishCard";
import Carousel from "../../components/carrousel/Carousel";

import data from "../../services/dishesDataServices";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import "./HomePage.css";

function HomePage(props) {

    data.importDishes(props.dishes);

    let [dishes, setDishes] = useState([]);

    const getAllDishes = () => {
        let allDishes = [];
        data.getAllDishes().then((items) => {
            items.forEach((item) => {
                const data = item.val();
                allDishes.push({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    image: data.image,
                });
            });

            setDishes([...allDishes]);
        }).catch((err) => {
            console.error(err);
        });
    }

    let simpleCards = dishes.map((dish, index) => (
        <SimpleDishCard dish={dish} key={index} />
    ));
    
    useEffect(() => {
        getAllDishes();
    }, []);

    return (
        <main>
            <section id="section-0">
                <h2>川闽福馆<br></br>CHUAN MIN FUISION</h2>
            </section>
            <section id="section-1">
                <h2>Our Best Sellers</h2>
                <Carousel contentList={simpleCards} />
            </section>
        </main>
    );
}
HomePage.propTypes = {
    dishes: PropTypes.array.isRequired,
};

export default HomePage;