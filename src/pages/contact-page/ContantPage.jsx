import "./ContactPage.css";
function ContactPage() {
    const API_SOURCE = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBgSYhfNiIOF3_WHNKiljbyPQSbWGPlvCQ&callback=console.debug&libraries=maps,marker&v=beta";
    return (
        <main>
            <script async src={API_SOURCE} />
            <section id="section-0">
                <h2>Contact Us</h2>
                <div className="section-content">
                    <p>phone: +34 123 12 21 31</p>
                    <p>email: contact@chuanminfusion.com</p>
                </div>
            </section>

            <section id="section-1">
                <h2>Reserve Table</h2>
                <div className="section-content">
                    <form className="reserve-form">
                        <input type="text" placeholder="Name" name="customer-name" required />
                        <input type="email" placeholder="Email" name="customer-mail" required />
                        <input type="date" placeholder="Date" name="reserve-date" required />
                        <input type="time" placeholder="Time" name="reserve-time" required />
                        <input type="number" placeholder="number of person" name="person-count" required />
                        <textarea placeholder="Other info" name="others-data" required></textarea>
                        <button type="submit">Reserve Table</button>
                    </form>
                </div>
            </section>

            <section id="section-2">
                <div className="section-content">
                    <div className="address">
                        <h2>Locate Us</h2>
                        <p>Somewhere,<br/> Las Palmas de G.C., 35010</p>
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

export default ContactPage;