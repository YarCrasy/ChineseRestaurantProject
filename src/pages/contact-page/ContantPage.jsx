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
                </div>
            </section>

            <section id="section-1">
                <div className="section-content">
                    <div className="address">
                        <h2>Locate Us</h2>
                        <p>Address: 1234 Main St, Townsville, 12345</p>
                    </div>
                    <div className="map">
                        <gmp-map center="28.128055572509766,-15.446507453918457" zoom="18" map-id="DEMO_MAP_ID">
                            <gmp-advanced-marker position="28.128055572509766,-15.446507453918457" title="My location"></gmp-advanced-marker>
                        </gmp-map>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactPage;