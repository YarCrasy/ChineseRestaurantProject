import "./NotFound.css";
import setLocalization from "../../services/localization";
import { useContext } from "react";
import { LanguageContext } from "../../App";

function NotFound() {
    const { lang } = useContext(LanguageContext);

    return (
        <main>
            <section id="section-0">
                <h2>404<br />{setLocalization("notFound.title", lang)}</h2>
                <p>{setLocalization("notFound.message", lang)}</p>
            </section>
        </main>
    );
}

export default NotFound;