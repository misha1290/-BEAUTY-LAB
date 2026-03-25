let currentLang = 'ru';

// --- ДАННЫЕ ДЛЯ БИОГРАФИЙ И ОБУЧЕНИЯ ---
const bios = {
    'alla': {
        name: { ru: 'Алла Кириленко', de: 'Alla Kirilenko' },
        text: { 
            ru: 'Основатель Beauty Lab, ведущий косметолог с более чем 10-летним стажем. Специализируется на комплексном омоложении и сложных эстетических протоколах.',
            de: 'Gründerin von Beauty Lab, leitende Kosmetologin mit über 10 Jahren Erfahrung. Spezialisiert auf komplexe Verjüngungsprozesse und fortschrittliche ästhetische Protokolle.'
        }
    },
    'olena': {
        name: { ru: 'Олена Тарасенко', de: 'Olena Tarasenko' },
        text: { 
            ru: 'Я Олена Тарасенко – сертифицированный лэшмейкер и тренер.\n\nЯ сочетаю точные методы работы с высокими стандартами качества и строгим соблюдением гигиенических норм.\n\nСегодня я работаю с четким фокусом на качество, безопасность и здоровье натуральных ресниц. Помимо работы мастером, я также передаю свои знания как тренер — структурированно, практично и с целью привить уверенность и мастерство.',
            de: 'Ich bin Olena Tarasenko – zertifizierte Lash-Stylistin und Trainerin.\n\nIch verbinde präzise Arbeitstechniken mit einem hohen Qualitätsanspruch und der strikten Einhaltung hygienischer Standards.\n\nHeute arbeite ich mit einem klaren Fokus auf Qualität, Sicherheit und gesunde Naturwimpern. Neben meiner Tätigkeit als Lash-Stylistin gebe ich mein Wissen auch als Trainerin weiter — strukturiert, praxisnah und mit dem Ziel, Sicherheit und Selbstvertrauen zu vermitteln.'
        }
    },
    'hanna': {
        name: { ru: 'Ханна Шуст', de: 'Hanna Shust' },
        text: { 
            ru: 'Приветствую! Меня зовут Ханна Шуст. Я мастер маникюра и педикюра. Предлагаю профессиональный уход с акцентом на эстетику и здоровье ваших ногтей.\n\nОсобенно важны для меня качество материалов, щадящие методы работы, а также соблюдение высочайших стандартов гигиены и стерилизации. Ваша безопасность и комфорт всегда на первом месте.',
            de: 'Hallo und herzlich willkommen! Mein Name ist Hanna Shust. Ich bin Nageldesignerin und Fußpflegerin. Ich biete professionelle Maniküre und Pediküre mit Fokus auf Ästhetik und Gesundheit Ihrer Nägel.\n\nBesonders wichtig sind mir die Qualität der Materialien, schonende Arbeitsmethoden sowie die Einhaltung höchster Hygiene- und Sterilisationsstandards. Ihre Sicherheit und Ihr Wohlbefinden stehen immer an erster Stelle.'
        }
    },
    'tatjana': {
        name: { ru: 'Татьяна Кравчук', de: 'Tatjana Krawtschuk' },
        text: { 
            ru: 'Как начать путь мастера татуировки и PMU, когда тебе 40+? Мой опыт доказывает: для таланта и новой карьеры не существует возрастных границ. Важны лишь страсть к делу, дисциплина и желание делать людей прекраснее.\n\nПриём клиентов: г. Луцк.',
            de: 'Wie beginnt man eine Karriere als Tattoo- und PMU-Künstlerin mit 40+? Meine Erfahrung beweist: Für Talent und einen Neuanfang gibt es keine Altersgrenzen. Wichtig sind nur die Leidenschaft für die Arbeit, Disziplin und der Wunsch, Menschen schöner zu machen.\n\nKundenempfang: Luzk.'
        }
    }
};

const eduData = {
    'pm': { 
        title: { ru: 'Курс Перманентного Макияжа', de: 'Kurs: Permanent Make-up' },
        content: { 
            ru: `<p class="font-medium text-stone-900 mb-4">Комплексная программа обучения:</p><ul class="list-disc pl-5 space-y-2"><li>Архитектура бровей и колористика</li><li>Техники: напыление, акварельные губы</li><li>Отработка на моделях</li></ul>`,
            de: `<p class="font-medium text-stone-900 mb-4">Umfassendes Trainingsprogramm:</p><ul class="list-disc pl-5 space-y-2"><li>Augenbrauenarchitektur und Koloristik</li><li>Techniken: Pudertechnik, Aquarell-Lippen</li><li>Praxis an Modellen</li></ul>`
        },
        id: 'Перманентный Макияж' 
    },
    'tattoo': { 
        title: { ru: 'Курс Художественной Татуировки', de: 'Kurs: Kunst-Tattoo' },
        content: { 
            ru: `<p class="font-medium text-stone-900 mb-4">Базовый курс тату-мастера:</p><ul class="list-disc pl-5 space-y-2"><li>Основы композиции</li><li>Контур и тени</li><li>Оборудование и стерилизация</li></ul>`,
            de: `<p class="font-medium text-stone-900 mb-4">Basiskurs für Tattoo-Künstler:</p><ul class="list-disc pl-5 space-y-2"><li>Grundlagen der Komposition</li><li>Kontur und Schattierung</li><li>Ausrüstung und Sterilisation</li></ul>`
        },
        id: 'Татуировка' 
    }
};

// --- АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКОВ ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('section').forEach(s => observer.observe(s));

// --- МОДАЛЬНЫЕ ОКНА БИОГРАФИЙ И ОБУЧЕНИЯ ---
function openBio(key) {
    document.getElementById('bioName').innerText = bios[key].name[currentLang];
    document.getElementById('bioText').innerText = bios[key].text[currentLang];
    document.getElementById('bioModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeBio() { document.getElementById('bioModal').classList.remove('show'); document.body.style.overflow = 'auto'; }

function openEduModal(type) {
    const data = eduData[type];
    document.getElementById('eduModalTitle').innerText = data.title[currentLang];
    document.getElementById('eduModalContent').innerHTML = data.content[currentLang];
    document.getElementById('eduModalBtn').onclick = () => { closeEduModal(); scrollToContact(data.id); };
    document.getElementById('eduModal').classList.add('show');
}
function closeEduModal() { document.getElementById('eduModal').classList.remove('show'); }

// --- НАВИГАЦИЯ И МЕНЮ ---
function scrollToContact(serviceId) {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const serviceSelect = document.getElementById('userSub');
        if (serviceSelect && serviceId) {
            for(let i=0; i<serviceSelect.options.length; i++) {
                if(serviceSelect.options[i].value === serviceId) {
                    serviceSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }
}

document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});
document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
        document.getElementById('mobileMenu').classList.remove('flex');
    });
});

// --- СЛОВАРЬ И ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ ---
const translations = {
    ru: {
        nav_services: "Услуги", nav_education: "Обучение", nav_team: "Команда", nav_contact: "Запись", nav_franchise: "Франшиза",
        hero_title: "Наука Вашей <br>Красоты", hero_btn1: "Онлайн Запись", hero_btn2: "Наши Услуги",
        services_title: "Эстетические услуги",
        srv_cosm: "Косметология", srv_cosm_desc: "Инновационные программы ухода и омоложения.",
        srv_nails: "Ногтевой Сервис", srv_nails_desc: "Премиальный уход за вашими руками.",
        srv_pmu: "Перманентный Макияж", srv_pmu_desc: "Совершенные линии и естественный результат надолго.",
        srv_lashes: "Уход за ресницами", srv_lashes_desc: "Наращивание и ламинирование ресниц для выразительного взгляда.",
        srv_tattoo: "Татуировка", srv_tattoo_desc: "Художественная татуировка любой сложности.",
        srv_massage: "Массаж", srv_massage_desc: "Релаксация и восстановление жизненных сил.",
        edu_title: "Обучение", edu_pmu: "Курс Перманентного Макияжа", edu_tattoo: "Курс Художественной Татуировки",
        team_title: "Наша Команда", 
        role_founder: "Основатель", name_alla: "Алла Кириленко", quote_alla: '"Истинная красота — это гармония здоровья и уверенности."',
        role_lash: "Лэшмейкер и Тренер", name_olena: "Олена Тарасенко", quote_olena: '"Точность встречается со страстью — для взгляда, который остается в памяти."',
        role_nail: "Мастер ногтевого сервиса", name_hanna: "Ханна Шуст", quote_hanna: '"Безупречный уход для ваших рук и ног, где эстетика встречается с комфортом."',
        role_tattoo: "Мастер тату и ПМ", name_tatjana: "Татьяна Кравчук", quote_tatjana: '"Искусство на коже, которое рассказывает вашу уникальную историю."',
        loc_tatjana: "Приём клиентов: г. Луцк", btn_bio: "Биография",
        contact_title: "Ваш визит <br>в лабораторию", contact_addr_title: "Адрес студии",
        contact_hours_title: "Часы работы", contact_hours: "Пн — Сб: 09:00 - 20:00<br>Вс: По записи",
        form_name: "ВАШЕ ИМЯ", form_phone: "ТЕЛЕФОН", form_city: "ГОРОД ДЛЯ ОТКРЫТИЯ", form_info: "ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ",
        opt_consult: "Бесплатная консультация", opt_cosm: "Косметология", opt_nails: "Ногтевой Сервис",
        opt_pmu: "Перманентный Макияж", opt_lashes: "Наращивание ресниц", opt_tattoo: "Татуировка", opt_massage: "Массаж",
        form_submit: "Записаться сейчас",
        fran_title: "BEAUTY LAB <br>Франшиза",
        fran_desc: "Мы приглашаем амбициозных профессионалов стать частью нашего бренда. Откройте студию премиального уровня под руководством экспертов Beauty Lab.",
        fran_step1_title: "Бренд и репутация", fran_step1_desc: "Готовое имя, которое уже ассоциируется с качеством и научным подходом к красоте.",
        fran_step2_title: "Поддержка первые 6 месяцев", fran_step2_desc: "Помощь в выборе локации, дизайне интерьера, закупке оборудования и найме персонала.",
        fran_step3_title: "Обучение мастеров", fran_step3_desc: "Регулярные мастер-классы и доступ к закрытой базе знаний Beauty Lab Academy.",
        fran_form_title: "Заявка на партнерство", fran_submit: "Отправить запрос",
        privacy_agree: "Нажимая кнопку, вы соглашаетесь с", privacy_link: "условиями конфиденциальности и обработки персональных данных.",
        footer_text: "© 2024 Chemnitz. Все права защищены."
    },
    de: {
        nav_services: "Dienstleistungen", nav_education: "Ausbildung", nav_team: "Team", nav_contact: "Termin", nav_franchise: "Franchise",
        hero_title: "Die Wissenschaft <br>Ihrer Schönheit", hero_btn1: "Online Buchen", hero_btn2: "Unsere Dienste",
        services_title: "Ästhetische Dienstleistungen",
        srv_cosm: "Kosmetologie", srv_cosm_desc: "Innovative Pflege- und Verjüngungsprogramme.",
        srv_nails: "Nagelstudio", srv_nails_desc: "Premium-Pflege für Ihre Hände.",
        srv_pmu: "Permanent Make-up", srv_pmu_desc: "Perfekte Linien und ein langanhaltendes natürliches Ergebnis.",
        srv_lashes: "Wimpernpflege", srv_lashes_desc: "Wimpernverlängerung und -lifting für einen ausdrucksstarken Blick.",
        srv_tattoo: "Tattoo", srv_tattoo_desc: "Künstlerische Tätowierungen jeder Komplexität.",
        srv_massage: "Massage", srv_massage_desc: "Entspannung und Wiederherstellung der Vitalität.",
        edu_title: "Ausbildung", edu_pmu: "Kurs: Permanent Make-up", edu_tattoo: "Kurs: Kunst-Tattoo",
        team_title: "Unser Team", 
        role_founder: "Gründerin", name_alla: "Alla Kirilenko", quote_alla: '"Wahre Schönheit ist die Harmonie von Gesundheit und Selbstvertrauen."',
        role_lash: "Wimpernstylistin & Trainerin", name_olena: "Olena Tarasenko", quote_olena: '"Präzision trifft auf Leidenschaft — für einen Blick, der in Erinnerung bleibt."',
        role_nail: "Nageldesignerin", name_hanna: "Hanna Shust", quote_hanna: '"Makellose Pflege für Ihre Hände und Füße, wo Ästhetik auf Komfort trifft."',
        role_tattoo: "Tattoo- und PMU-Künstlerin", name_tatjana: "Tatjana Krawtschuk", quote_tatjana: '"Kunst auf der Haut, die Ihre einzigartige Geschichte erzählt."',
        loc_tatjana: "Kundenempfang: Luzk", btn_bio: "Biografie",
        contact_title: "Ihr Besuch <br>im Labor", contact_addr_title: "Studio-Adresse",
        contact_hours_title: "Öffnungszeiten", contact_hours: "Mo — Sa: 09:00 - 20:00<br>So: Nach Vereinbarung",
        form_name: "IHR NAME", form_phone: "TELEFON", form_city: "STADT FÜR ERÖFFNUNG", form_info: "ZUSÄTZLICHE INFO",
        opt_consult: "Kostenlose Beratung", opt_cosm: "Kosmetologie", opt_nails: "Nagelstudio",
        opt_pmu: "Permanent Make-up", opt_lashes: "Wimpernverlängerung", opt_tattoo: "Tattoo", opt_massage: "Massage",
        form_submit: "Jetzt buchen",
        fran_title: "BEAUTY LAB <br>Franchise",
        fran_desc: "Wir laden ambitionierte Profis ein, Teil unserer Marke zu werden. Eröffnen Sie ein Premium-Studio unter der Leitung von Beauty Lab Experten.",
        fran_step1_title: "Marke & Ruf", fran_step1_desc: "Ein etablierter Name, der mit Qualität und einem wissenschaftlichen Ansatz für Schönheit verbunden ist.",
        fran_step2_title: "Unterstützung (Erste 6 Monate)", fran_step2_desc: "Hilfe bei der Standortwahl, Inneneinrichtung, Gerätekauf und Personalsuche.",
        fran_step3_title: "Meisterausbildung", fran_step3_desc: "Regelmäßige Meisterklassen und Zugang zur geschlossenen Wissensbasis der Beauty Lab Academy.",
        fran_form_title: "Partnerschaftsanfrage", fran_submit: "Anfrage senden",
        privacy_agree: "Mit Klick auf den Button stimmen Sie den", privacy_link: "Datenschutz- und Verarbeitungsbedingungen zu.",
        footer_text: "© 2024 Chemnitz. Alle Rechte vorbehalten."
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'de' : 'ru';
    
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if(translations[currentLang][key]) { el.innerHTML = translations[currentLang][key]; }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if(translations[currentLang][key]) { el.placeholder = translations[currentLang][key]; }
    });

    const btnText = currentLang === 'ru' ? 'DE' : 'RU';
    document.getElementById('langSwitcher').innerText = btnText;
    document.getElementById('langSwitcherMob').innerText = btnText;
    document.documentElement.lang = currentLang;
}

document.getElementById('langSwitcher').addEventListener('click', toggleLanguage);
document.getElementById('langSwitcherMob').addEventListener('click', toggleLanguage);


// --- СОХРАНЕНИЕ ДАННЫХ ФОРМЫ (LocalStorage) ---
const formInputs = ['userName', 'userPhone', 'franName', 'franEmail', 'franCity', 'franInfo'];

window.addEventListener('DOMContentLoaded', () => {
    formInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input && localStorage.getItem(id)) {
            input.value = localStorage.getItem(id);
        }
        if (input) {
            input.addEventListener('input', (e) => {
                localStorage.setItem(id, e.target.value);
            });
        }
    });
});

function clearFormStorage(ids) {
    ids.forEach(id => localStorage.removeItem(id));
}

// --- TELEGRAM БОТ И МОДАЛЬНОЕ ОКНО УСПЕХА ---
const TG_TOKEN = '8633789638:AAEBoepk57YgnA_iKOpoI1RKUo4rVzZVpo4';
const TG_CHAT_ID = '238822778';

function showSuccessModal() {
    const title = currentLang === 'ru' ? 'Успешно!' : 'Erfolgreich!';
    const text = currentLang === 'ru' ? 'Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.' : 'Ihre Anfrage wurde gesendet. Wir werden uns in Kürze bei Ihnen melden.';
    
    // Проверяем, есть ли модалка в HTML (чтобы не было ошибки)
    const modalTitle = document.getElementById('successTitle');
    const modalText = document.getElementById('successText');
    const modal = document.getElementById('successModal');
    
    if (modalTitle && modalText && modal) {
        modalTitle.innerText = title;
        modalText.innerText = text;
        modal.classList.add('show');
    } else {
        alert(title + '\n' + text);
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.remove('show');
}

// Добавляем функцию глобально, если кнопка закрытия вызывает её из HTML
window.closeSuccessModal = closeSuccessModal;

async function sendToTelegram(message, inputIdsToClear) {
    const url = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: TG_CHAT_ID, text: message, parse_mode: 'HTML' })
        });
        
        if (response.ok) {
            showSuccessModal();
            clearFormStorage(inputIdsToClear);
        } else {
            alert(currentLang === 'ru' ? 'Ошибка отправки. Попробуйте позже.' : 'Fehler beim Senden. Bitte versuchen Sie es später.');
        }
    } catch (error) {
        console.error('Ошибка Telegram:', error);
        alert(currentLang === 'ru' ? 'Ошибка сети.' : 'Netzwerkfehler.');
    }
}

document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const service = document.getElementById('userSub').value;
    const message = `🌟 <b>Новая запись на услугу!</b>\n\n👤 <b>Имя:</b> ${name}\n📞 <b>Телефон:</b> ${phone}\n💅 <b>Услуга:</b> ${service}`;
    
    sendToTelegram(message, ['userName', 'userPhone']).then(() => this.reset());
});

document.getElementById('franchiseForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('franName').value;
    const email = document.getElementById('franEmail').value;
    const city = document.getElementById('franCity').value;
    const info = document.getElementById('franInfo').value;
    const message = `💼 <b>Новая заявка на франшизу!</b>\n\n👤 <b>Имя:</b> ${name}\n📧 <b>E-mail:</b> ${email}\n🏙 <b>Город:</b> ${city}\n📝 <b>Инфо:</b> ${info || 'Нет данных'}`;
    
    sendToTelegram(message, ['franName', 'franEmail', 'franCity', 'franInfo']).then(() => this.reset());
});
