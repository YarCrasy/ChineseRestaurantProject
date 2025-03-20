import PropTypes from 'prop-types';
import './Carousel.css';
import { useRef, useEffect, useState } from 'react';

function Carousel({ contentList }) {
    const containerRef = useRef(null);
    const [direction, setDirection] = useState(1);
    const [position, setPosition] = useState(0);

    const content2Display = [];
    content2Display.push(contentList);

    useEffect(() => {
        let interval = setInterval(() => {
            const children = containerRef.current.children;
            let nextPos = position + direction * 2; // Adjust speed as needed

            for (let i = 0; i < children.length; i++) {
                children[i].style.transform = `translateX(${nextPos}px)`;
            }

            for (let i = 0; i < children.length; i++) {
                if (children[i].getBoundingClientRect().x < -300) {
                    children[i].style.transform = `translateX(${nextPos + (children.length * 420)}px)`;
                } else if (children[i].getBoundingClientRect().x > 3000) {
                    children[i].style.transform = `translateX(${nextPos - (children.length * 420)}px)`;
                }
            }

            setPosition(nextPos);
        }, 16);

        return () => clearInterval(interval);
    }, [contentList, direction, position]);

    const handlePrevClick = () => {
        setDirection(-1);
    };

    const handleNextClick = () => {
        setDirection(1);
    };

    return (
        <div className="carousel">
            <div className="carousel-display">
                <button className="carousel-btn carousel-btn-prev" onClick={handlePrevClick}>
                    ‹
                </button>
                <div className="carousel-container" ref={containerRef}>
                    {content2Display}
                </div>
                <button className="carousel-btn carousel-btn-next" onClick={handleNextClick}>
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