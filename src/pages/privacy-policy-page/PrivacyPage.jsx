import "./PrivacyPage.css";
import setLocalization from "../../services/localization";
import { useContext } from "react";
import { LanguageContext } from "../../App";

function PrivacyPage() {
    const { lang } = useContext(LanguageContext);

    return (
        <main className="privacy-page">
            <h2>{setLocalization("privacyPage.title", lang)}</h2>
            <div className="content">
                <p>{setLocalization("privacyPage.intro", lang)}</p>
                <h3>{setLocalization("privacyPage.infoCollectedTitle", lang)}</h3>
                <p>{setLocalization("privacyPage.infoCollected", lang)}</p>
                <h3>{setLocalization("privacyPage.infoUsageTitle", lang)}</h3>
                <p>{setLocalization("privacyPage.infoUsage", lang)}</p>
                <h3>{setLocalization("privacyPage.infoDisclosureTitle", lang)}</h3>
                <p>{setLocalization("privacyPage.infoDisclosure", lang)}</p>
                <h3>{setLocalization("privacyPage.accessCorrectionTitle", lang)}</h3>
                <p>{setLocalization("privacyPage.accessCorrection", lang)}</p>
                <h3>{setLocalization("privacyPage.cookiesTitle", lang)}</h3>
                <p>{setLocalization("privacyPage.cookies", lang)}</p>
                <h3>{setLocalization("privacyPage.changesTitle", lang)}</h3>
                <p>{setLocalization("privacyPage.changes", lang)}</p>
                <h3>{setLocalization("privacyPage.contactTitle", lang)}</h3>
                <p>{setLocalization("privacyPage.contact", lang)}</p>
            </div>
        </main>
    );
}

export default PrivacyPage;