import PropTypes from 'prop-types';
import useCarouselBehavior from './CarouselBehavior';
import './Carousel.css';

function Carousel({ contentList, autoPlay = true }) {
    // Duplicate content to simulate infinite loop
    const extendedContent = [...contentList, ...contentList];
    const {
        containerRef,
        handleScroll,
        startScrollLeft,
        startScrollRight,
        stopScroll,
    } = useCarouselBehavior(autoPlay);

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