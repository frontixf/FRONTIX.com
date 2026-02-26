// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// // Languages
// const texts = {
//   en: {
//     title: "Digital Future With FRONTIX",
//     desc: "We create high-performance websites and Telegram bots.",
//     btn: "Start Project",
//     why: "Why Choose Us",
//     fast: "Fast Development",
//     secure: "Secure Systems",
//     modern: "Modern Design",
//     serviceTitle: "Website Development",
//     serviceDesc1: "We build fully responsive, fast, and SEO-optimized websites using modern frontend technologies.",
//     serviceDesc2: "Our solutions are scalable, secure, and optimized for performance.",
//     galleryTitle: "Our Projects Preview"
//   },

//   ru: {
//     title: "Цифровое будущее с FRONTIX",
//     desc: "Мы создаем высокопроизводительные сайты и Telegram боты.",
//     btn: "Начать проект",
//     why: "Почему выбирают нас",
//     fast: "Быстрая разработка",
//     secure: "Безопасные системы",
//     modern: "Современный дизайн",
//     serviceTitle: "Разработка сайтов",
//     serviceDesc1: "Мы создаем адаптивные, быстрые и SEO-оптимизированные сайты с использованием современных технологий.",
//     serviceDesc2: "Наши решения масштабируемые, безопасные и оптимизированы для производительности.",
//     galleryTitle: "Наши проекты"
//   },

//   uz: {
//     title: "FRONTIX bilan raqamli kelajak",
//     desc: "Biz yuqori samarali saytlar va Telegram botlar yaratamiz.",
//     btn: "Loyihani boshlash",
//     why: "Nega bizni tanlaysiz",
//     fast: "Tezkor ishlab chiqish",
//     secure: "Xavfsiz tizimlar",
//     modern: "Zamonaviy dizayn",
//     serviceTitle: "Sayt Yaratish",
//     serviceDesc1: "Biz zamonaviy texnologiyalar yordamida tezkor va SEO optimallashtirilgan saytlar yaratamiz.",
//     serviceDesc2: "Yechimlarimiz xavfsiz, kengaytiriladigan va yuqori samarali.",
//     galleryTitle: "Loyihalarimiz"
//   }
// };


// // Change language function
// function setLang(lang) {
//   document.querySelectorAll("[data-key]").forEach(el => {
//     const key = el.getAttribute("data-key");
//     if (texts[lang][key]) {
//       el.textContent = texts[lang][key];
//     }
//   });
// }



// document.getElementById("contactForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     const token = "AAGmMAmxBQXj7VHOc0LUi2r";  // <-- tokenni qo'y
//     const chat_id = "7158130495";  // <-- chat id ni qo'y

//     const text = `
// 📩 Yangi xabar FRONTIX saytidan:

// 👤 Ism: ${name}
// 📧 Email: ${email}
// 💬 Xabar: ${message}
//     `;

//     console.log(text);
    
//     fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             chat_id: chat_id,
//             text: text
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert("Xabar yuborildi ✅");
//         document.getElementById("contactForm").reset();
//     })
//     .catch(error => {
//         alert("Xatolik yuz berdi ❌");
//     });
// });




//lang i18n ***************************************************



