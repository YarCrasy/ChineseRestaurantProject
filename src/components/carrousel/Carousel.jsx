import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

function Carousel({ contentList, autoPlay = true, autoPlayTime = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (autoPlay) {
            interval = setInterval(() => {
                setCurrentIndex(prev => (prev + 1));
            }, autoPlayTime);
        }
        return () => clearInterval(interval);
    }, [autoPlay, autoPlayTime, contentList.length]);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? contentList.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % contentList.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-display">
                <button
                    onClick={handlePrev}
                    className="carousel-btn carousel-btn-prev">
                    ‹
                </button>
                <div className="carousel-container">
                    {contentList.map((item, index) => (
                        <div
                            key={index}
                            className="carousel-item"
                            style={{
                                transform: `translateX(${(index - currentIndex) * 100}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}>
                            {item}
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="carousel-btn carousel-btn-next">
                    ›
                </button>
            </div>
            <div className="carousel-dots">
                {contentList.map((_, index) => (
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

Carousel.propTypes = {
    contentList: PropTypes.arrayOf(PropTypes.element).isRequired,
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number
};

export default Carousel;