import "./NewsPage.css";
import rss from "/imgs/icon-imgs/rss-icon.svg";

function NewsPage() {
    return (
        <main>
            <section id="section-0">
                <h2>Subscribe to our RSS!</h2>
                <a href="/news.xml" target="_blank">
                    <img src={rss} alt="RSS" width={50} />
                </a>
            </section>
            <section id="section-1">
                <h2>NEWS - THE GREAT OPENNING</h2>
                <div className="section-content">
                    <p>We are happy to announce the openning of our first restaurant in Las Palmas de GC!</p>
                </div>
            </section>
            <section id="section-2">
                <h2>SALE - 2x1 AT SPRING ROLLS</h2>
                <div className="section-content">
                    <p>2x1 in purchases greater than 30€</p>
                </div>
            </section>
        </main>
    );
}

export default NewsPage;