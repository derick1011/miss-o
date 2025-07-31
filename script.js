<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Missão</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="caixa-principal">
        <h1>Missão Olímpica - Surfe</h1>
        <div class="caixa-perguntas"></div>
        <div class="caixa-alternativas"></div>
        <div class="caixa-resultado">
            <p class="texto-resultado"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
CSS
:root{
    --cor-fundo:#ff0000;
    --cor-principal:#000000; 
    --cor-secundaria:#000000;
    --cor-destaque:#fff700;
    --cor-texto:#0d00ff;
}
body{
    background-color: var(--cor-fundo);
    color: var(--cor-texto);

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;
    min-height: 100vh;
 }
SCRIPT
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]
let atual=0;
let perguntaAtual;
let historiaFinal="";
let pontos=0;
function mostraPergunta(){(params) {
      perguntaAtual=[atual]
      caixaPerguntas.textContent=pergunta.Atual.enunciado;
      caixaAlternativa.textContent="";
      mostraAlternativa();
}