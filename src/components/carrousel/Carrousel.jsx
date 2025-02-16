import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const Carrousel = ({ simpleCards, autoPlay = true, autoPlayTime = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (autoPlay && simpleCards.length) {
            const timer = setInterval(() => {
                setCurrentIndex(curr => (curr + 1) % simpleCards.length);
            }, autoPlayTime);
            return () => clearInterval(timer);
        }
    }, [autoPlay, autoPlayTime, simpleCards.length]);

    if (!simpleCards || !simpleCards.length) return <div>oops, dishes dissapeared</div>;

    return (
        <div className="carousel">
            <div className="carousel-display">
                <button
                    onClick={() => setCurrentIndex(curr => (curr === 0 ? simpleCards.length - 1 : curr - 1))}
                    className="carousel-btn carousel-btn-prev">
                    ‹
                </button>
                <div className="carousel-container">
                    {simpleCards.map((card) => (
                        card
                    ))
                    }
                </div>
                <button
                    onClick={() => setCurrentIndex(curr => (curr + 1) % simpleCards.length)}
                    className="carousel-btn carousel-btn-next">
                    ›
                </button>
            </div>
            <div className="carousel-dots">
                {simpleCards.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrousel;