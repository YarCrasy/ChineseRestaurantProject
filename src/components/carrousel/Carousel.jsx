import PropTypes from 'prop-types';
import CarouselBehaviour from './CarouselBehaviour';
import './Carousel.css';

function Carousel({ contentList, autoPlay = true }) {
    const {
        containerRef,
        handleScroll,
        startScrollLeft,
        startScrollRight,
        stopScroll,
        extendedContent
    } = CarouselBehaviour(contentList, autoPlay);

    return (
        <div className="carousel">
            <div className="carousel-display">
                <button
                    onMouseDown={startScrollLeft}
                    onMouseUp={stopScroll}
                    onMouseLeave={stopScroll}
                    className="carousel-btn carousel-btn-prev">
                    ‹
                </button>
                <div
                    className="carousel-container"
                    ref={containerRef}
                    onScroll={handleScroll}>
                    {extendedContent}
                </div>
                <button
                    onMouseDown={startScrollRight}
                    onMouseUp={stopScroll}
                    onMouseLeave={stopScroll}
                    className="carousel-btn carousel-btn-next">
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