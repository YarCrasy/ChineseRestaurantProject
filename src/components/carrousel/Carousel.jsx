import PropTypes from 'prop-types';
import './Carousel.css';
import { useRef, useEffect, useState } from 'react';

function Carousel({ contentList }) {
    const containerRef = useRef(null);
    containerRef.current

    const content2Display = [];
    content2Display.push(contentList);

    useEffect(() => {
        let counter = 0;
        let interval = setInterval(() => {
            const children = containerRef.current.children;
            let nextPos = -1 * counter;

            for (let i = 0; i < children.length; i++) {
                children[i].style.transform = `translateX(${nextPos}px)`;
            }

            for(let i = 0; i < children.length; i++) {
                if(children[i].getBoundingClientRect().x < -300) {
                    console.log(children[i].getBoundingClientRect().x);
                    children[i].style.transform = `translateX(${nextPos + (children.length * 420)}px)`;
                }
            }

            counter++;
        }, 1);

        return () => clearInterval(interval);
    }, [contentList]);

    return (
        <div className="carousel">
            <div className="carousel-display">
                <button className="carousel-btn carousel-btn-prev">
                    ‹
                </button>
                <div className="carousel-container" ref={containerRef}>
                    {content2Display}
                </div>
                <button className="carousel-btn carousel-btn-next">
                    ›
                </button>
            </div>
        </div>
    );
}

Carousel.propTypes = {
    contentList: PropTypes.arrayOf(PropTypes.element).isRequired,
    autoPlay: PropTypes.bool,
};

export default Carousel;