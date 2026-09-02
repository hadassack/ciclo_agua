// Dados sobre as etapas do ciclo da água
const etapasCiclo = {
  evaporacao: {
    titulo: "1. Evaporação",
    descricao: "Com o calor do Sol, a água dos oceanos, rios e lagos aquece e transforma-se em vapor de água, subindo para a atmosfera."
  },
  transpiracao: {
    titulo: "2. Transpiração",
    descricao: "Os seres vivos (plantas e animais) também liberam água na forma de vapor para a atmosfera através da transpiração."
  },
  condensacao: {
    titulo: "3. Condensação",
    descricao: "Ao subir, o vapor de água esfria e volta ao estado líquido, formando pequenas gotinhas que se juntam para criar as nuvens."
  },
  precipitacao: {
    titulo: "4. Precipitação",
    descricao: "Quando as nuvens ficam muito pesadas e carregadas de gotas d'água, ocorre a chuva (ou neve/granizo em regiões muito frias)."
  },
  infiltracao: {
    titulo: "5. Infiltração e Escoamento",
    descricao: "A água que cai no solo penetra na terra alimentando os lençóis freáticos (infiltração) ou corre pela superfície até os rios e mares (escoamento)."
  }
};

// Função para exibir as informações da etapa selecionada
function mostrarInfo(etapa) {
  const painelInfo = document.getElementById("info-painel");
  const dados = etapasCiclo[etapa];

  if (dados) {
    painelInfo.innerHTML = `
      <h3>${dados.titulo}</h3>
      <p>${dados.descricao}</p>
    `;
    painelInfo.classList.add("ativo");
  }
}

// Configuração dos eventos após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  const botoesEtapas = document.querySelectorAll(".btn-etapa");

  botoesEtapas.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
      const etapaSelecionada = evento.target.getAttribute("data-etapa");
      mostrarInfo(etapaSelecionada);
    });
  });
});
