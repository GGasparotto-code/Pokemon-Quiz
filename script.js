// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual o principal Pokemon do Ash?",
    respostas: [{ opcao: "Pikachu", correto: true },
    { opcao: "Charmander", correto: false },
    { opcao: "Bubasauro", correto: false }]
  },
  {
    "pergunta": "Qual a primeira evolução do Charmander?",
    "respostas": [
      { "opcao": "Charmeleon", "correto": true },
      { "opcao": "Charizard", "correto": false },
      { "opcao": "Squirtle", "correto": false }
    ]
  },
  {
    "pergunta": "Qual o nome do rival de Ash na primeira temporada?",
    "respostas": [
      { "opcao": "Gary", "correto": true },
      { "opcao": "Brock", "correto": false },
      { "opcao": "Misty", "correto": false }
    ]
  },
  {
    "pergunta": "Qual o nome da equipe de vilões que Ash sempre enfrenta?",
    "respostas": [
      { "opcao": "Equipe Rocket", "correto": true },
      { "opcao": "Equipe Aqua", "correto": false },
      { "opcao": "Equipe Magma", "correto": false }
    ]
  },
    {
    "pergunta": "Qual desses pokémons é do tipo água?",
    "respostas": [
      { "opcao": "Squirtle", "correto": true },
      { "opcao": "Charmander", "correto": false },
      { "opcao": "Pikachu", "correto": false }
    ]
  },
    {
    "pergunta": "Qual desses pokémons é do tipo planta?",
    "respostas": [
      { "opcao": "Bulbasaur", "correto": true },
      { "opcao": "Charmander", "correto": false },
      { "opcao": "Pikachu", "correto": false }
    ]
  },
    {
    "pergunta": "Qual desses pokémons é do tipo fogo?",
    "respostas": [
      { "opcao": "Charmander", "correto": true },
      { "opcao": "Bulbasaur", "correto": false },
      { "opcao": "Pikachu", "correto": false }
    ]
  },
    {
    "pergunta": "Qual desses pokémons é do tipo elétrico?",
    "respostas": [
      { "opcao": "Pikachu", "correto": true },
      { "opcao": "Charmander", "correto": false },
      { "opcao": "Bulbasaur", "correto": false }
    ]
  },
  {
    "pergunta": "Qual o nome do professor que Ash encontra no início de sua jornada?",
    "respostas": [
      { "opcao": "Professor Carvalho", "correto": true },
      { "opcao": "Professor Elm", "correto": false },
      { "opcao": "Professor Birch", "correto": false }
    ]
  },
  {
    "pergunta": "Qual o tipo de Pokémon que é predominante em Lavender Town?",
    "respostas": [
      { "opcao": "Fantasma", "correto": true },
      { "opcao": "Psíquico", "correto": false },
      { "opcao": "Veneno", "correto": false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos
let erros = 0;// Contador de erros

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      } else {
        erros++; // Incrementa contador de erros
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas. Você errou ${erros} perguntas`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Botão "Jogar Novamente"
const botaoJogarNovamente = document.getElementById("jogarNovamente");

botaoJogarNovamente.addEventListener("click", reiniciarJogo);

function reiniciarJogo() {
  indiceAtual = 0; // Índice da pergunta atual
  acertos = 0; // Contador de acertos
  erros = 0; // Contador de erros
  conteudo.style.display = "flex"; // Mostra as perguntas
  conteudoFinal.style.display = "none"; // Esconde a tela final
  carregarPergunta(); // Carrega a próxima pergunta novamente
}

// PARTE 7: Iniciando o jogo pela primeira vez
carregarPergunta();