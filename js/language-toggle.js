export function initLanguageToggle() {
    const languageToggleButton = document.getElementById('language-toggle');
    let currentLanguage = localStorage.getItem('language') || 'en';

    function changeLanguage(language) {
        if (language === 'en') {
            document.body.setAttribute('lang', 'en');
        } else if (language === 'ua') {
            document.body.setAttribute('lang', 'ua');
        }

        const elements = document.querySelectorAll('[data-en], [data-uk]');
        elements.forEach(element => {
            if (language === 'en') {
                element.innerHTML = element.getAttribute('data-en');
            } else {
                element.innerHTML = element.getAttribute('data-uk');
            }
        });

        localStorage.setItem('language', language);
    }

    changeLanguage(currentLanguage);

    languageToggleButton.addEventListener('click', () => {
        currentLanguage = (currentLanguage === 'en') ? 'ua' : 'en';
        changeLanguage(currentLanguage);
    });
}
