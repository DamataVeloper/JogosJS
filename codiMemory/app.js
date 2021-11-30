document.addEventListener('DOMContentLoaded', ()=>{
    // carregamento dos cards
    const cardArray = [
        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },
        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },
        {
            name: 'direita',
            img: 'images/direita.png'
        },
        {
            name: 'direita',
            img: 'images/direita.png'
        },
        {
            name: 'tras',
            img: 'images/tras.png'
        },
        {
            name: 'tras',
            img: 'images/tras.png'
        },
        {
            name: 'correndo',
            img: 'images/correndo.png'
        },
        {
            name: 'correndo',
            img: 'images/correndo.png'
        },
        {
            name: 'pulo',
            img: 'images/pulo.png'
        },
        {
            name: 'pulo',
            img: 'images/pulo.png'
        },
        {
            name: 'esquerda',
            img: 'images/esquerda.png'
        },
        {
            name: 'esquerda',
            img: 'images/esquerda.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random());
    
    const grid = document.querySelector('.grid');

    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let pares = [];

    // criando a tela
    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'images/card.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card)
        }
    }
    // virando cards
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length == 2){
            setTimeout(checkForMatch, 500)
        }


    }

    createBoard();
})