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
    // Conferindo pares
    function checkforMatch(){
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        console.log(optionOneId)
        console.log(optionTwoId)
        console.log(cards)

        // Clica duas vezes no mesmo card
        if(optionOneId == optionTwoId){
            
            cards[optionOneId].setAttribute('src', 'images/card.png');
            cards[optionTwoId].setAttribute('src', 'images/card.png');
            
            alert("Voce clicou na mesma imagem");
           
        }
        //Formando um par
        else if(cardsChosen[0] == cardsChosen[1]){
            alert("voce consguiu um par!!!");

            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');

            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);

            pares.push(cardsChosen);
        }
        // nao formou um par
        else{
            cards[optionOneId].setAttribute('src', 'images/card.png');
            cards[optionTwoId].setAttribute('src', 'images/card.png');
            
            alert("ops! Jogue novamente");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = pares.length;

        if(pares.length == cardArray.length/2){
            resultDisplay.textContent = 'Parabens! Vc encontrol todos os pares'
        }
    }
    // virando cards
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length == 2){
            setTimeout(checkforMatch, 500)
        }


    }

    createBoard();
})