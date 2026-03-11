let jogos = [
    {
        nome: "Dixit",
        minJogadores: 3,
        maxJogadores: 6,
        tempo: 30
    },
    {
        nome: "The Mind",
        minJogadores: 2,
        maxJogadores: 4,
        tempo: 15
    },
    {
        nome: "Taco Gato Cabra Queijo Pizza",
        minJogadores: 2,
        maxJogadores: 8,
        tempo: 10
    },
    {
        nome: "Deception: Murder in Hong Kong",
        minJogadores: 4,
        maxJogadores: 12,
        tempo: 20
    },
    {
        nome: "Love Letter",
        minJogadores: 2,
        maxJogadores: 4,
        tempo: 20
    },
    {
        nome: "El Camarero",
        minJogadores: 2,
        maxJogadores: 10,
        tempo: 30
    },
    {
        nome: "Zombicide",
        minJogadores: 1,
        maxJogadores: 6,
        tempo: 150
    }
];

function filtrarPorJogadores(jogos, num) {
    let filtroJogadores = [];

    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i].minJogadores <= num && jogos[i].maxJogadores >= num) {
            filtroJogadores.push(jogos[i]);
        }
    }
    return filtroJogadores;
}


function filtrarPorTempo(jogos, time) {
    let filtroTempo = [];

    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i].tempo <= time) {
            filtroTempo.push(jogos[i]);
        }
    }
    return filtroTempo;
}


function sortearJogo(jogos) {
    let indice = Math.floor(Math.random() * jogos.length);
    return jogos[indice];
}


function sugerirJogo(jogos, num, time) {
    let indicado1 = filtrarPorJogadores(jogos, num);
    let indicado2 = filtrarPorTempo(indicado1, time);
    let indicado3 = sortearJogo(indicado2);

    return indicado3;
}

let botao = document.getElementById('btnSortear');
botao.onclick = () => {
    let sugestao = sugerirJogo(jogos, Number(jogadores.value), Number(tempoJogo.value));
        if (sugestao) {
            resultado.textContent = sugestao.nome;
        } else {
            resultado.textContent = "Nenhum jogo encontrado para esses filtros";
        }

    jogadores.value = "";
    tempoJogo.value = "";
}

let jogadores = document.getElementById('qtdJogadores');
let tempoJogo = document.getElementById('qtdTempo');
let resultado = document.getElementById('resultado');
