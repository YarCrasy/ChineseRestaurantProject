import { useState } from "react";
import "./CookiesPanel.css";

function CookiesPanel() {
    const [showPanel, setShowPanel] = useState(
        localStorage.getItem("cookiesAccepted") !== "true"
    );

    const ClosePanel = () => {
        setShowPanel(false);
        localStorage.setItem("cookiesAccepted", "true");
    };

    if (!showPanel) return null;

    return (
        <div className="cookies-panel">
            <div className="cookies-panel-content">
                <div className="cookies-panel-text">
                    <p>
                        This website uses cookies to ensure you get the best experience on
                        our website.
                    </p>
                </div>
                <div className="cookies-panel-buttons">
                    <button onClick={ClosePanel}>Accept</button>
                </div>
            </div>
        </div>
    );
}

export default CookiesPanel;