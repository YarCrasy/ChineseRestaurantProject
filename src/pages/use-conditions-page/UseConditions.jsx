import "./UseConditions.css";
import setLocalization from "../../services/localization";
import { useContext } from "react";
import { LanguageContext } from "../../App";

function UseConditions() {
    const { lang } = useContext(LanguageContext);

    return (
        <main className="use-conditions">
            <h2>{setLocalization("useConditions.title", lang)}</h2>
            <div className="content">
                <p>{setLocalization("useConditions.intro", lang)}</p>
                <h3>{setLocalization("useConditions.websiteUsageTitle", lang)}</h3>
                <p>{setLocalization("useConditions.websiteUsage", lang)}</p>
                <h3>{setLocalization("useConditions.intellectualPropertyTitle", lang)}</h3>
                <p>{setLocalization("useConditions.intellectualProperty", lang)}</p>
                <h3>{setLocalization("useConditions.linksTitle", lang)}</h3>
                <p>{setLocalization("useConditions.links", lang)}</p>
                <h3>{setLocalization("useConditions.liabilityTitle", lang)}</h3>
                <p>{setLocalization("useConditions.liability", lang)}</p>
                <h3>{setLocalization("useConditions.governingLawTitle", lang)}</h3>
                <p>{setLocalization("useConditions.governingLaw", lang)}</p>
            </div>
        </main>
    );
}

export default UseConditions;