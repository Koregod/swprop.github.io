document.addEventListener('DOMContentLoaded', function() {
    // коллекция цитат для генератора
    const quotes = [
        { text: "Убей немца — это молитва твоей матери", author: "Илья Эренбург" },
        { text: "Не первый раз нашему народу приходится иметь дело с нападающим врагом. Наполеон потерпел поражение...", author: "В. Молотов, 22 июня 1941" },
        { text: "Мера нашей любви к Родине — сила ненависти к врагу", author: "Ванда Василевская, «Ненависть»" },
        { text: "Если дорог тебе твой дом — убей фашиста!", author: "Константин Симонов" },
        { text: "Фашисты пришли не как завоеватели, а как саранча, как чума", author: "Алексей Толстой" },
        { text: "Мы не можем представить себе немца иначе, как с автоматом в руках", author: "Илья Эренбург" }
    ];
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    
    function randomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.innerText = `«${quotes[randomIndex].text}»`;
        quoteAuthor.innerText = `— ${quotes[randomIndex].author}`;
    }
    if (newQuoteBtn) {
        newQuoteBtn.addEventListener('click', randomQuote);
        randomQuote(); // начальная цитата
    }

    // ЛАЙКИ для всех карточек
    document.querySelectorAll('.like-btn').forEach(btn => {
        const countSpan = btn.querySelector('.like-count');
        let count = parseInt(countSpan.innerText);
        let liked = false;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!liked) {
                count++;
                btn.classList.add('liked');
                btn.querySelector('i').classList.remove('far');
                btn.querySelector('i').classList.add('fas');
                liked = true;
            } else {
                count--;
                btn.classList.remove('liked');
                btn.querySelector('i').classList.remove('fas');
                btn.querySelector('i').classList.add('far');
                liked = false;
            }
            countSpan.innerText = count;
        });
    });

    // ПЕРЕВОД НА АНГЛИЙСКИЙ (переключение класса body)
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'ru';
    
    function updateLanguage(lang) {
        if (lang === 'en') {
            document.body.classList.add('lang-en');
            langToggle.innerHTML = '<i class="fas fa-language"></i> Русский / EN';
        } else {
            document.body.classList.remove('lang-en');
            langToggle.innerHTML = '<i class="fas fa-language"></i> English / Рус';
        }
        currentLang = lang;
    }
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            if (currentLang === 'ru') {
                updateLanguage('en');
            } else {
                updateLanguage('ru');
            }
        });
    }

    // ссылки на статьи (демо-режим)
    document.querySelectorAll('.hyper-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') e.preventDefault();
            const message = (document.body.classList.contains('lang-en')) 
                ? 'Demo link to archive material' 
                : 'Демо-ссылка на архивный материал';
            alert(message);
        });
    });
});