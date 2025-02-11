import "./Footer.css";
import github from "../../assets/icon-imgs/github-icon.svg";
import linkedin from "../../assets/icon-imgs/linkedin-icon.svg";
import twitter from "../../assets/icon-imgs/twitter-icon.svg";
import youtube from "../../assets/icon-imgs/youtube-icon.svg";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#menu">Menu</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="social-container">
                    <h4 class="social-title">Social Media</h4>
                    <div class="social-links">
                        <a href="https://github.com/YarCrasy" target="_blank">
                            <img src={github} alt="GitHub" class="social-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jlc-gamedev/" target="_blank">
                            <img src={linkedin} alt="LinkedIn" class="social-icon"/>
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <img src={twitter} alt="X(Twitter)" class="social-icon"/>
                        </a>
                        <a href="https://www.youtube.com/@Yar-Crasy" target="_blank">
                            <img src={youtube} alt="YouTube" class="social-icon"/>
                        </a>
                    </div>
                </div>
                <p className="copyright">
                    &copy; 2025 ChuanMin Fusion. <br />
                    All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;