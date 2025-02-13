'use strict';

const categorias = [
    { nome: 'Celulares', icon: 'celular.png', cor: 'red' },
    { nome: 'Informatica', icon: 'monitor.png', cor: 'blue' },
    { nome: 'Games', icon: 'controle.png', cor: 'pink' },
    { nome: 'Moveis', icon: 'movel.png', cor: 'green' }
];

const produtos = [
    { nome: 'Persona 5 Royal midia física para PS5', descricao: 'Prepare-se para uma experiência inédita de RPG com Persona 5 Royal, com base no universo da premiada série Persona! Ponha a máscara de Joker e junte-se aos Phantom Thieves of Hearts.', preco: 199.99, imagem: 'p5r.png', avaliacao: 5, corBotao: 'blue', corBotao: '	#d92323'},
    { nome: 'Persona 4 Golden midia física para Nintendo Switch', descricao: 'O mundialmente conhecido Persona 4 Golden promete aventura inesquecíveis, laços inquebráveis e experiências emotivas compartilhadas com amigos.', preco: 79.99, imagem: 'p4g.png', avaliacao: 5, corBotao: '	#ffe52c' },
    { nome: 'Persona 3 reload midia digital para Xbox Series.', descricao: 'Lançado pela Atlus, Persona 3 Reload oferece uma experiência única, mergulhando os jogadores na Academia Gekkoukan, onde criaturas sobrenaturais chamadas Personas despertam.', preco: 249.99, imagem: 'p3Re.png', avaliacao: 5, corBotao: '#00bbfa' },
    { nome: 'Shin Megami Tensei V: Vengeance  para Nintendo Switch', descricao:'Um salvador surge para ajudar o protagonista a se unir a ele e formar um Nahobino, um ser poderoso. Juntos, eles devem trilhar seu caminho por um reino enigmático.', preco: 219.99, imagem: 'smtV.png', avaliacao: 4, corBotao: '#000000' }
];

function criarMenu(categoria) {
    const novoItem = document.createElement('li');
    const novaImagem = document.createElement('img');
    const novoSpan = document.createElement('span');
    const lista = document.getElementById('menu');

    novaImagem.src = `./img/${categoria.icon}`;
    novoSpan.textContent = categoria.nome;
    novoItem.style = `--cor-hover: ${categoria.cor}`;

    novoItem.appendChild(novaImagem);
    novoItem.appendChild(novoSpan);

    lista.appendChild(novoItem);
}

function criarCard(produto) {
    const card = document.createElement('div');
    card.classList.add('card');

    const imagem = document.createElement('img');
    imagem.src = `./img/${produto.imagem}`;
    imagem.alt = produto.nome;
    imagem.classList.add('card-img');

    const titulo = document.createElement('h3');
    titulo.textContent = produto.nome;

    const descricao = document.createElement('p');
    descricao.textContent = produto.descricao;

    const preco = document.createElement('p');
    preco.classList.add('price');
    preco.textContent = `$${produto.preco.toFixed(2)}`;

    const avaliacao = document.createElement('div');
    avaliacao.classList.add('avaliacao');
    avaliacao.innerHTML = criarEstrelas(produto.avaliacao);

    const botao = document.createElement('button');
    botao.textContent = 'Comprar agora!';
    botao.style.backgroundColor = produto.corBotao;
    botao.addEventListener('click', () => {
        alert(`Você comprou: ${produto.nome}`);
     
    });

    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(preco);
    card.appendChild(avaliacao);
    card.appendChild(botao);

    return card;
}

function adicionarCards() {
    const container = document.querySelector('.cards-container');
    produtos.forEach(produto => {
        const card = criarCard(produto);
        container.appendChild(card);
    });
}

function criarEstrelas(avaliacao) {
    const estrelasCheias = Math.floor(avaliacao); 
    const temMeiaEstrela = avaliacao % 1 !== 0; 
    const estrelasVazias = 5 - estrelasCheias - (temMeiaEstrela ? 1 : 0); 

    let estrelasHTML = '';

    for (let i = 0; i < estrelasCheias; i++) {
        estrelasHTML += '⭐';
    }

    if (temMeiaEstrela) {
        estrelasHTML += '½';
    }

    for (let i = 0; i < estrelasVazias; i++) {
        estrelasHTML += '☆';
    }

    return estrelasHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    categorias.forEach(categoria => {
        criarMenu(categoria);
    });
    adicionarCards();
});
