import { useEffect } from 'react';

function CarouselBehaviour(containerRef, contentList, autoplay = false) {

    let duplicatedContent = [];
    duplicatedContent.push(contentList);
    duplicatedContent.push(contentList);
    containerRef.push = duplicatedContent;

    CarouselAutoPlay(duplicatedContent, true);
    
}

function CarouselAutoPlay(contentList, autoplay = false) {
    if (!autoplay) return;

    useEffect(() => {
        let interval = setInterval(() => {
            for (let i = 0; i < contentList.length; i++) {
                

            }
        }, [100]);

        return () =>  clearInterval(interval);
    }, []);

}

export default CarouselBehaviour;