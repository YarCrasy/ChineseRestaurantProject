import { useRef, useEffect } from 'react';

function CarouselBehaviour(contentList, autoPlay) {
    const extendedContent = contentList.concat(contentList.map((item, index) => ({
        ...item,
        key: `${item.key || index}-duplicate`
    })));

    const containerRef = useRef(null);
    const scrollInterval = useRef(null);
    const autoScrollRef = useRef(null);
    const autoResumeTimeoutRef = useRef(null);

    const cancelAutoPlay = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
        if (autoResumeTimeoutRef.current) {
            clearTimeout(autoResumeTimeoutRef.current);
        }
    };

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

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft = container.scrollWidth / 2;
        }

        if (autoPlay) {
            autoScrollRef.current = setInterval(() => {
                scrollRightFn(25);
            }, 200);
            return () => clearInterval(autoScrollRef.current);
        }
    }, [autoPlay]);

    return {
        containerRef,
        handleScroll,
        startScrollLeft,
        startScrollRight,
        stopScroll,
        extendedContent
    };
};

export default CarouselBehaviour;