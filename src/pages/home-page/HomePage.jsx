import SimpleDishCard from "../../components/simple-dish-card/SimpleDishCard";
import Carousel from "../../components/carrousel/Carousel";

import data from "../../services/dataService";
import { useEffect, useState } from "react";

import "./HomePage.css";

function HomePage(props) {

    data.importDishes(props.dishes);

    let [dishes, setDishes] = useState([]);

    const getAllDishes = () => {
        let allDishes = [];
        data.getAllDishes().then((items) => {
            items.forEach((item) => {
                const key = item.key;
                const data = item.val();
                allDishes.push({
                    key: key,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    img: data.img,
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

export default HomePage;