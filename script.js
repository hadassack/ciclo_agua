document.addEventListener("DOMContentLoaded", function () {

/* =====================
BOTÃO EXPLORAR
===================== */

const explorarBtn =
document.getElementById("explorarBtn");

explorarBtn.addEventListener("click", function () {

document
  .getElementById("etapas")
  .scrollIntoView({
    behavior: "smooth"
  });

});

/* =====================
ETAPAS DO CICLO
===================== */

const dados = {

evaporacao: {
  icone: "☀️",
  numero: "ETAPA 01",
  titulo: "Evaporação",
  texto: "O Sol aquece a água presente nos rios, lagos, mares e oceanos. Parte dessa água se transforma em vapor e sobe para a atmosfera."
},


condensacao: {
  icone: "☁️",
  numero: "ETAPA 02",
  titulo: "Condensação",
  texto: "Ao subir para regiões mais frias, o vapor de água perde calor e se transforma em pequenas gotículas que se agrupam e formam as nuvens."
},


precipitacao: {
  icone: "🌧️",
  numero: "ETAPA 03",
  titulo: "Precipitação",
  texto: "Quando as gotas presentes nas nuvens ficam muito pesadas, elas caem para a superfície em forma de chuva, neve ou granizo."
},


infiltracao: {
  icone: "🌱",
  numero: "ETAPA 04",
  titulo: "Infiltração",
  texto: "Parte da água que chega ao solo penetra na terra e pode abastecer os lençóis de água subterrâneos."
},


escoamento: {
  icone: "🌊",
  numero: "ETAPA 05",
  titulo: "Escoamento",
  texto: "A água percorre a superfície terrestre e segue para rios, lagos, mares e oceanos. Assim, o ciclo pode começar novamente."
}

};

const botoes =
document.querySelectorAll(".etapa-btn");

const painelIcone =
document.getElementById("painelIcone");

const painelNumero =
document.getElementById("painelNumero");

const painelTitulo =
document.getElementById("painelTitulo");

const painelTexto =
document.getElementById("painelTexto");

botoes.forEach(function (botao) {

botao.addEventListener("click", function () {


  const etapa =
    botao.dataset.etapa;


  const dado =
    dados[etapa];


  /* Remove o ativo */

  botoes.forEach(function (outroBotao) {

    outroBotao.classList.remove("ativo");

  });


  /* Ativa o clicado */

  botao.classList.add("ativo");


  /* Atualiza o painel */

  painelIcone.textContent =
    dado.icone;


  painelNumero.textContent =
    dado.numero;


  painelTitulo.textContent =
    dado.titulo;


  painelTexto.textContent =
    dado.texto;


  /* Pequena animação */

  const painel =
    document.querySelector(".painel");


  painel.style.transform =
    "scale(0.96)";


  painel.style.opacity =
    "0.6";


  setTimeout(function () {

    painel.style.transform =
      "scale(1)";


    painel.style.opacity =
      "1";

  }, 150);


});

});

/* =====================
QUIZ
===================== */

const respostas =
document.querySelectorAll(".resposta");

const resultado =
document.getElementById("resultadoQuiz");

respostas.forEach(function (resposta) {

resposta.addEventListener("click", function () {


  const correta =
    resposta.dataset.correta;


  if (correta === "true") {

    resultado.textContent =
      "🎉 ACERTOU! A água pode evaporar quando recebe calor do Sol!";


  } else {

    resultado.textContent =
      "😅 Quase! Pense no que acontece com a água quando ela é aquecida pelo Sol.";

  }


});

});

});
