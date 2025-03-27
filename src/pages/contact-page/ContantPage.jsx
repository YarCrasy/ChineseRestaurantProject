import "./ContactPage.css";
import PropTypes from "prop-types";
import setLocalization from "../../services/localization";
import { useContext } from "react";
import { LanguageContext } from "../../App";

function ContactPage() {
    const { lang } = useContext(LanguageContext);

    const API_SOURCE = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBgSYhfNiIOF3_WHNKiljbyPQSbWGPlvCQ&callback=console.debug&libraries=maps,marker&v=beta";
    return (
        <main>
            <script async src={API_SOURCE} />
            <section id="section-0">
                <h2>{setLocalization("contactPage.contactUs", lang)}</h2>
                <div className="section-content">
                    <p>{setLocalization("contactPage.phone", lang)}: +34 123 12 21 31</p>
                    <p>{setLocalization("contactPage.email", lang)}: contact@chuanminfusion.com</p>
                </div>
            </section>

            <section id="section-1">
                <h2>{setLocalization("contactPage.reserveTable", lang)}</h2>
                <div className="section-content">
                    <form className="reserve-form">
                        <input type="text" placeholder={setLocalization("contactPage.name", lang)} name="customer-name" required />
                        <input type="email" placeholder={setLocalization("contactPage.email", lang)} name="customer-mail" required />
                        <input type="date" placeholder={setLocalization("contactPage.date", lang)} name="reserve-date" required />
                        <input type="time" placeholder={setLocalization("contactPage.time", lang)} name="reserve-time" required />
                        <input type="number" placeholder={setLocalization("contactPage.personCount", lang)} name="person-count" required />
                        <textarea placeholder={setLocalization("contactPage.otherInfo", lang)} name="others-data" required></textarea>
                        <button type="submit">{setLocalization("contactPage.reserveButton", lang)}</button>
                    </form>
                </div>
            </section>

            <section id="section-2">
                <div className="section-content">
                    <div className="address">
                        <h2>{setLocalization("contactPage.locateUs", lang)}</h2>
                        <p>Somewhere,<br /> Las Palmas de G.C., 35010</p>
                    </div>
                    <gmp-map 
                        center="28.128055572509766,-15.446507453918457" 
                        zoom="18" 
                        map-id="DEMO_MAP_ID">
                        <gmp-advanced-marker position="28.128055572509766,-15.446507453918457" title="My location"></gmp-advanced-marker>
                    </gmp-map>
                </div>
            </section>
        </main>
    );
}

ContactPage.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default ContactPage;