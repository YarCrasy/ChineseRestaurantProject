import { useRef, useEffect } from 'react';

function useCarouselBehavior(autoPlay) {
    const containerRef = useRef(null);
    const scrollInterval = useRef(null);
    const defaultAutoPlayTime = 3000;

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            // Set scroll position to the beginning of the second half
            container.scrollLeft = container.scrollWidth / 2;
        }
    }, []);

    useEffect(() => {
        if (autoPlay) {
            const autoScroll = setInterval(() => {
                scrollRightFn();
            }, defaultAutoPlayTime);
            return () => clearInterval(autoScroll);
        }
    }, [autoPlay]);

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

    const scrollLeftFn = () => {
        const container = containerRef.current;
        const start = container.scrollLeft;
        const target = start - 50;
        animateScroll(start, target, 300);
    };

    const scrollRightFn = () => {
        const container = containerRef.current;
        const start = container.scrollLeft;
        const target = start + 50;
        animateScroll(start, target, 300);
    };

    const startScrollLeft = () => {
        scrollInterval.current = setInterval(scrollLeftFn, 100);
    };

    const startScrollRight = () => {
        scrollInterval.current = setInterval(scrollRightFn, 100);
    };

    const stopScroll = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    return {
        containerRef,
        handleScroll,
        startScrollLeft,
        startScrollRight,
        stopScroll,
        scrollRightFn, // needed for autoPlay
    };
}

export default useCarouselBehavior;
