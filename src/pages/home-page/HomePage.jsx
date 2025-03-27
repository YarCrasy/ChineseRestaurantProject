import SimpleDishCard from "../../components/simple-dish-card/SimpleDishCard";
import Carousel from "../../components/carrousel/Carousel";
import setLocalization from "../../services/localization";
import { useContext } from "react";
import { LanguageContext } from "../../App";

import data from "../../services/dishesDataServices";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import "./HomePage.css";

function HomePage({ dishes }) {
    const { lang } = useContext(LanguageContext);

    data.importDishes(dishes);

    let [dishesState, setDishes] = useState([]);

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

    let simpleCards = dishesState.map((dish, index) => (
        <SimpleDishCard dish={dish} key={index} />
    ));
    
    useEffect(() => {
        getAllDishes();
    }, []);

    return (
        <main>
            <section id="section-0">
                <h2>{setLocalization("homepage.title", lang)}</h2>
            </section>
            <section id="section-1">
                <h2>{setLocalization("homepage.bestSellers", lang)}</h2>
                <Carousel contentList={simpleCards} />
            </section>
        </main>
    );
}
HomePage.propTypes = {
    dishes: PropTypes.array.isRequired,
};

export default HomePage;