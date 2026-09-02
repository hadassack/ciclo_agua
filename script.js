// ==========================================
// INFORMAÇÕES DAS ETAPAS
// ==========================================

const infos = {
    evaporacao: {
        titulo: "☀️ Evaporação",
        texto: "O Sol fornece energia e aquece a água presente nos oceanos, rios, lagos e outros lugares. Quando recebe calor suficiente, a água líquida se transforma em vapor e sobe para a atmosfera."
    },

    condensacao: {
        titulo: "☁️ Condensação",
        texto: "O vapor de água sobe para regiões mais frias da atmosfera. Ao perder calor, ele se transforma em pequenas gotículas de água. Muitas dessas gotículas juntas formam as nuvens."
    },

    precipitacao: {
        titulo: "🌧️ Precipitação",
        texto: "Quando as gotículas de água nas nuvens ficam grandes e pesadas, elas caem para a superfície da Terra. Isso pode acontecer como chuva, neve ou granizo."
    },

    infiltracao: {
        titulo: "🌱 Infiltração",
        texto: "Uma parte da água que chega ao solo penetra pelos espaços entre as partículas. Essa água pode alimentar os lençóis freáticos e contribuir para o crescimento das plantas."
    }
};


// ==========================================
// MOSTRAR INFORMAÇÕES
// ==========================================

function showInfo(tipo) {

    const info = infos[tipo];

    const box = document.getElementById("info-box");

    box.innerHTML = `
        <div class="info-icon">${info.titulo.substring(0, 2)}</div>
        <div>
            <h3>${info.titulo}</h3>
            <p>${info.texto}</p>
        </div>
    `;

    box.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// ==========================================
// ANIMAÇÃO
// ==========================================

function startAnimation() {

    const area = document.getElementById("animation-area");

    area.classList.toggle("active");

    if (area.classList.contains("active")) {
        area.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


// ==========================================
// MODAL
// ==========================================

function openModal(title, text) {

    const modal = document.getElementById("modal");
    const content = document.getElementById("modal-content");

    content.innerHTML = `
        <h2>${title}</h2>
        <p>${text}</p>
    `;

    modal.classList.add("show");
}


function closeModal() {
    document.getElementById("modal").classList.remove("show");
}


document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeModal();
    }

});


// ==========================================
// QUIZ
// ==========================================

const questions = [

    {
        question: "Qual fonte de energia ajuda a causar a evaporação?",
        answers: [
            "🌙 A Lua",
            "☀️ O Sol",
            "⭐ As estrelas",
            "🌬️ O vento"
        ],
        correct: 1
    },

    {
        question: "Como se chama o processo de formação das nuvens?",
        answers: [
            "🌱 Infiltração",
            "🌊 Escoamento",
            "☁️ Condensação",
            "🔥 Combustão"
        ],
        correct: 2
    },

    {
        question: "Qual destes é um exemplo de precipitação?",
        answers: [
            "🌧️ Chuva",
            "☀️ Sol",
            "🌫️ Vapor",
            "🌊 Oceano"
        ],
        correct: 0
    },

    {
        question: "Para onde parte da água da chuva pode ir?",
        answers: [
            "🌌 Para o espaço",
            "🌱 Para o solo",
            "☀️ Para o Sol",
            "🚀 Para outro planeta"
        ],
        correct: 1
    }

];

let currentQuestion = 0;
let score = 0;
let answered = false;


function loadQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    document.getElementById("question").textContent =
        question.question;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach((answerText, index) => {

        const button = document.createElement("button");

        button.textContent = answerText;

        button.onclick = () => answer(index);

        answersContainer.appendChild(button);

    });

    document.getElementById("quiz-result").textContent = "";

    answered = false;
}


function answer(index) {

    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];

    const buttons = document.querySelectorAll(".answers button");

    if (index === question.correct) {

        buttons[index].classList.add("correct");

        score++;

        document.getElementById("quiz-result").innerHTML =
            "🎉 Muito bem! Você acertou!";

    } else {

        buttons[index].classList.add("wrong");

        buttons[question.correct].classList.add("correct");

        document.getElementById("quiz-result").innerHTML =
            "💡 Quase! A resposta correta está destacada em verde.";
    }

    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showFinalScore();

        }

    }, 1500);
}


function showFinalScore() {

    document.getElementById("question-number").textContent =
        "🏆 Quiz terminado!";

    document.getElementById("question").textContent =
        `Você fez ${score} de ${questions.length} pontos!`;

    const answers = document.getElementById("answers");

    answers.innerHTML = `
        <button onclick="restartQuiz()" style="grid-column: 1 / -1;">
            🔄 Jogar novamente
        </button>
    `;

    let message;

    if (score === 4) {
        message = "🌟 Uau! Você é um verdadeiro especialista no ciclo da água!";
    } else if (score >= 2) {
        message = "💧 Muito bom! Você já entende bastante sobre o ciclo da água.";
    } else {
        message = "🌱 Continue estudando! Você vai aprender rapidinho.";
    }

    document.getElementById("quiz-result").textContent = message;
}


function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    loadQuestion();

}


// ==========================================
// EFEITO DE GOTINHAS AO CLICAR
// ==========================================

document.addEventListener("click", function(event) {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.tagName === "A"
    ) {
        createDrop(event.clientX, event.clientY);
    }

});


function createDrop(x, y) {

    const drop = document.createElement("div");

    drop.textContent = "💧";

    drop.style.position = "fixed";
    drop.style.left = `${x}px`;
    drop.style.top = `${y}px`;
    drop.style.fontSize = "20px";
    drop.style.pointerEvents = "none";
    drop.style.zIndex = "999";
    drop.style.animation = "float 1s ease-out forwards";

    document.body.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 1000);
}


// ==========================================
// INICIALIZAÇÃO
// ==========================================

loadQuestion();

console.log("💧 AquaMundo carregado com sucesso!");
