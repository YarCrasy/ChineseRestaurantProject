import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const Carrousel = ({ slides, autoPlay = true, autoPlayTime = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (autoPlay && slides.length) {
            const timer = setInterval(() => {
                setCurrentIndex(curr => (curr + 1) % slides.length);
            }, autoPlayTime);
            return () => clearInterval(timer);
        }
    }, [autoPlay, autoPlayTime, slides.length]);

    if (!slides || !slides.length) return <div>No hay elementos para mostrar.</div>;

    return (
        <>
            {/* <div className="carousel">
                <div className="carousel-display">
                    <button
                        onClick={() => setCurrentIndex(curr => (curr === 0 ? slides.length - 1 : curr - 1))}
                        className="carousel-btn carousel-btn-prev">
                        ‹
                    </button>
                    <div className="container">
                        <p>hi</p>
                    </div>
                    <button
                        onClick={() => setCurrentIndex(curr => (curr + 1) % slides.length)}
                        className="carousel-btn carousel-btn-next">
                        ›
                    </button>
                </div>
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div> */}
            <div className="carousel-container">
                <button
                    onClick={() => setCurrentIndex(curr => (curr === 0 ? slides.length - 1 : curr - 1))}
                    className="carousel-btn carousel-btn-prev">
                    ‹
                </button>
                <div className="carousel-inner">
                    {slides[currentIndex]}
                </div>
                <button
                    onClick={() => setCurrentIndex(curr => (curr + 1) % slides.length)}
                    className="carousel-btn carousel-btn-next">
                    ›
                </button>
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carrousel;