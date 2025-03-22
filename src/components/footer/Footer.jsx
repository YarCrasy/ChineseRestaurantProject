import "./Footer.css";
import github from "/imgs/icon-imgs/github-icon.svg";
import linkedin from "/imgs/icon-imgs/linkedin-icon.svg";
import twitter from "/imgs/icon-imgs/twitter-icon.svg";
import youtube from "/imgs/icon-imgs/youtube-icon.svg";
import rss from "/imgs/icon-imgs/rss-icon.svg";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="social-container">
                    <h4 className="social-title">Suscribe to our RSS!</h4>
                    <a href="/news.xml" target="_blank">
                        <img src={rss} alt="GitHub" className="social-icon" />
                    </a>
                </div>
                <div className="social-container">
                    <h4 className="social-title">Social Media</h4>
                    <div className="social-links">
                        <a href="https://github.com/YarCrasy/ChineseRestaurantProject" target="_blank">
                            <img src={github} alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/jlc-gamedev/" target="_blank">
                            <img src={linkedin} alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <img src={twitter} alt="X(Twitter)" className="social-icon" />
                        </a>
                        <a href="https://www.youtube.com/@Yar-Crasy" target="_blank">
                            <img src={youtube} alt="YouTube" className="social-icon" />
                        </a>
                    </div>
                </div>
                <p className="copyright">
                    &copy; 2025 ChuanMin Fusion. <br />
                    All rights reserved.
                </p>
                <p>
                    <a href="/legal/privacy">Privacy Policy</a> | <a href="/legal/terms">Terms of Use</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;