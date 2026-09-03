const information = {

evaporacao: {
icon: "☀️",
title: "Evaporação",
text: "O calor do Sol aquece a água presente nos oceanos, rios, lagos e até no solo. Parte dessa água se transforma em vapor e sobe para a atmosfera."
},

condensacao: {
icon: "☁️",
title: "Condensação",
text: "Ao subir para regiões mais frias da atmosfera, o vapor de água perde calor e se transforma em pequenas gotículas. Essas gotículas se agrupam e formam as nuvens."
},

precipitacao: {
icon: "🌧️",
title: "Precipitação",
text: "Quando as gotículas de água presentes nas nuvens ficam muito pesadas, elas caem para a superfície. Isso pode acontecer em forma de chuva, neve ou granizo."
},

infiltracao: {
icon: "🌱",
title: "Infiltração",
text: "Parte da água da chuva penetra no solo. Essa água pode abastecer lençóis subterrâneos e ajudar no desenvolvimento das plantas."
},

escoamento: {
icon: "🌊",
title: "Escoamento",
text: "A água que não infiltra no solo percorre a superfície terrestre e segue para rios, lagos, mares e oceanos, onde o ciclo pode começar novamente."
}

};

function showInfo(step, clickedCard) {

const data = information[step];

document.getElementById("info-icon").textContent = data.icon;

document.getElementById("info-title").textContent = data.title;

document.getElementById("info-text").textContent = data.text;

// Remove a seleção de todos os cards

const cards = document.querySelectorAll(".cycle-card");

cards.forEach(card => {

card.classList.remove("active");

});

// Seleciona o card clicado

clickedCard.classList.add("active");

// Animação da caixa de informações

const infoBox = document.querySelector(".info-box");

infoBox.style.transform = "scale(0.97)";

infoBox.style.opacity = "0.7";

setTimeout(() => {

infoBox.style.transform = "scale(1)";

infoBox.style.opacity = "1";

}, 150);

}

/* =========================
ANIMAÇÃO AO ROLAR
========================= */

const elements = document.querySelectorAll(
".cycle-card, .timeline-item, .fact-card"
);

const observer = new IntersectionObserver(

entries => {

entries.forEach(entry => {

  if (entry.isIntersecting) {

    entry.target.style.opacity = "1";

    entry.target.style.transform = "translateY(0)";

  }

});

},

{
threshold: 0.15
}

);

elements.forEach(element => {

element.style.opacity = "0";

element.style.transform = "translateY(30px)";

element.style.transition = "0.6s ease";

observer.observe(element);

});
