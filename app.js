'use strict';

// Dados para o menu
const categorias = [
    { nome: 'Celulares', icon: 'telefone.png', cor: 'red' },
    { nome: 'Informatica', icon: 'pc.png', cor: 'blue' },
    { nome: 'Games', icon: 'controle.png', cor: 'pink' },
    { nome: 'Moveis', icon: 'mesa.png', cor: 'green' }
];


const produtos = [
    { nome: 'Persona 5 Royal midia física para PS5', descricao: 'Prepare-se para um experiência inédita de RPG com Persona5 Royal, com base no universo da premiada série Persona! Ponha a máscara de Joker e junte-se aos Phantom Thieves of Hearts.', preco: 200.00, imagem: 'p5r.png', avaliacao: 4 },
    { nome: 'Persona 4 Golden midia física para Nintendo switch', descricao: 'O mundialmente conhecido Persona 4 Golden promete aventura inesquecíveis, laços inquebráveis e experiências emotivas compartilhadas com amigos.', preco: 40.00, imagem: 'p4g.png', avaliacao: 5 },
    { nome: 'Watch', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', preco: 70.84, imagem: 'watch.png', avaliacao: 3 },
    { nome: 'Mobile', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', preco: 1000.84, imagem: 'mobile.png', avaliacao: 4 }
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




adicionarCards();