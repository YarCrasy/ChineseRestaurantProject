import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

function Carousel({ contentList, autoPlay = true }) {
    // Duplicate content to simulate infinite loop
    // Have To Fix This keys error...
    const extendedContent = [...contentList, ...contentList];
    const containerRef = useRef(null);
    const scrollInterval = useRef(null);
    const autoScrollRef = useRef(null);
    const autoResumeTimeoutRef = useRef(null);

    // Set initial scroll position to the middle (beginning of second half)
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft = container.scrollWidth / 2;
        }
    }, []);

    // Auto scroll effect
    useEffect(() => {
        if (autoPlay) {
            autoScrollRef.current = setInterval(() => {
                scrollRightFn(25);
            }, 200);
            return () => clearInterval(autoScrollRef.current);
        }
    }, [autoPlay]);

    // Function to cancel auto-play when manual scrolling starts
    const cancelAutoPlay = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
        if (autoResumeTimeoutRef.current) {
            clearTimeout(autoResumeTimeoutRef.current);
        }
    };

    // Wrap scroll position if needed
    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft <= 0) {
            container.scrollLeft = halfWidth;
        } else if (container.scrollLeft >= halfWidth * 2 - container.offsetWidth) {
            container.scrollLeft = halfWidth - container.offsetWidth;
        }
    };

    // Smoothly animate the scroll
    const animateScroll = (start, target, duration, callback) => {
        const container = containerRef.current;
        let startTime = null;
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            container.scrollLeft = start + (target - start) * progress;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else if (callback) {
                callback();
            }
        }
        requestAnimationFrame(step);
    };

    // Scroll functions (unified, without extra boundary checks)
    const scrollLeftFn = (scrollSpeed = 100) => {
        const container = containerRef.current;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft <= 0) {
            container.scrollLeft = halfWidth;
            return;
        }
        const start = container.scrollLeft;
        const target = start - scrollSpeed;
        animateScroll(start, target, 300);
    };

    const scrollRightFn = (scrollSpeed = 100) => {
        const container = containerRef.current;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth * 2 - container.offsetWidth) {
            container.scrollLeft = halfWidth;
            return;
        }
        const start = container.scrollLeft;
        const target = start + scrollSpeed;
        animateScroll(start, target, 300);
    };

    // Handlers for button pressed events; cancel auto-play on press
    const startScrollLeft = () => {
        cancelAutoPlay();
        scrollInterval.current = setInterval(scrollLeftFn, 100);
    };

    const startScrollRight = () => {
        cancelAutoPlay();
        scrollInterval.current = setInterval(scrollRightFn, 100);
    };

    const stopScroll = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
        autoResumeTimeoutRef.current = setTimeout(() => {
            if (autoPlay) {
                autoScrollRef.current = setInterval(() => {
                    scrollRightFn(25);
                }, 200);
            }
        }, 500);
    };

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