const information = {
evaporacao: {
icon: "☀️",
title: "Evaporação",
text: "O calor do Sol aquece a água dos oceanos, rios e lagos. Parte dessa água se transforma em vapor e sobe para a atmosfera."
},

condensacao: {
icon: "☁️",
title: "Condensação",
text: "O vapor de água sobe para regiões mais frias, perde calor e se transforma em pequenas gotículas que formam as nuvens."
},

precipitacao: {
icon: "🌧️",
title: "Precipitação",
text: "Quando as gotículas das nuvens ficam pesadas, a água retorna à superfície em forma de chuva, neve ou granizo."
},

infiltracao: {
icon: "🌱",
title: "Infiltração",
text: "Parte da água da chuva penetra no solo e pode abastecer os lençóis subterrâneos."
},

escoamento: {
icon: "🌊",
title: "Escoamento",
text: "A água percorre a superfície terrestre e segue para rios, lagos, mares e oceanos, reiniciando o ciclo."
}
};

const cards = document.querySelectorAll(".cycle-card");

const infoIcon = document.getElementById("info-icon");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");

cards.forEach(card => {

card.addEventListener("click", function () {

const step = this.dataset.step;

const data = information[step];


cards.forEach(otherCard => {
  otherCard.classList.remove("active");
});


this.classList.add("active");


infoIcon.textContent = data.icon;
infoTitle.textContent = data.title;
infoText.textContent = data.text;

});

});
