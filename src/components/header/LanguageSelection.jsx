function languageSelection() {

    const dropdownBtn = document.querySelector('.dropdown-btn');
    const langLinks = document.querySelectorAll('.lang-dropdown a');
    langLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedLang = link.getAttribute('data-lang');
            document.documentElement.lang = selectedLang;
            if (selectedLang === 'es') {
                dropdownBtn.textContent = 'ES ▼';
            } else if (selectedLang === 'en') {
                dropdownBtn.textContent = 'EN ▼';
            }
        });
    });
}

export default languageSelection;