import PropTypes from 'prop-types';
import './LangDropdown.css';

function LangDropdown({ selectedLang, onLanguageChange }) {
    return (
        <div className="lang-dropdown">
            <button className="dropdown-btn">{selectedLang.toUpperCase()} ▼</button>
            <div className="dropdown-content">
                <a onClick={() => onLanguageChange('en')}>English</a>
                <a onClick={() => onLanguageChange('es')}>Español</a>
                <a onClick={() => onLanguageChange('zh')}>中文</a>
            </div>
        </div>
    );
}

LangDropdown.propTypes = {
    selectedLang: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
};

export default LangDropdown;
