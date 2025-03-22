import { useRef, useEffect, useState } from 'react';

function CarouselBehaviour(contentList) {
    const containerRef = useRef(null);
    const [direction, setDirection] = useState(-1);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            const simpleCards = containerRef.current.children;
            let nextPos = position + direction * 2;


            for (let i = 0; i < simpleCards.length; i++) {
                simpleCards[i].style.transform = `translateX(${nextPos}px)`;
            }

            for (let i = 0; i < simpleCards.length; i++) {
                const childRect = simpleCards[i].getBoundingClientRect();
                console.log(i + " " + childRect.x);
                if (childRect.x < -300) {
                    simpleCards[i].style.transform = `translateX(${nextPos + (simpleCards.length * 420)}px)`;
                } else if (childRect.x > window.innerWidth) {
                    simpleCards[i].style.transform = `translateX(${nextPos - (simpleCards.length * 420)}px)`;
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

    return { containerRef, handlePrevClick, handleNextClick };
}

export default CarouselBehaviour;