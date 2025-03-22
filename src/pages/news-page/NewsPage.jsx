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
                <h2>News</h2>
                <div className="section-content">
                    <p>Here you can find the latest news about our company.</p>
                </div>
            </section>
        </main>
    );
}

export default NewsPage;