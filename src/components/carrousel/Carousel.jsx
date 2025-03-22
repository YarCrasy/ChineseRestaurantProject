import PropTypes from 'prop-types';
import './Carousel.css';
import CarouselBehaviour from './CarouselBehaviour';

function Carousel({ contentList }) {
    const {
        containerRef,
        handlePrevClick,
        handleNextClick } = CarouselBehaviour(contentList);

    const content2Display = [];
    content2Display.push(contentList);

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