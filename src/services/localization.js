import esTranslations from './localizations/es.json';
import enTranslations from './localizations/en.json';
import zhTranslations from './localizations/zh.json';

const translations = {
    es: esTranslations,
    en: enTranslations,
    zh: zhTranslations
    // Add other languages here if needed
};

function setLocalization(key, lang = 'es') {
    const keys = key.split('.');
    let result = translations[lang];
    keys.forEach(k => {
        result = result ? result[k] : null;
    });
    return result || key;
}

export default setLocalization;