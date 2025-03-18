function CarouselBehaviour(containerRef, contentList, autoplay = false) {

    let duplicatedContent = [];
    duplicatedContent.push(contentList);
    duplicatedContent.push(contentList);
    console.log(duplicatedContent);
    containerRef.push = duplicatedContent;

    CarouselAutoPlay(duplicatedContent);
}

function CarouselAutoPlay(contentList, autoplay = false) {

    console.log("start autoplay");

}

export default CarouselBehaviour;