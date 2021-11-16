let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


//carregando as imgens
let bird = new Image();
bird.src = "./imagens/bird.png";

let bg = new Image();
bg.src = "imagens/bg.png";

let chao = new Image();
chao.src = "imagens/chao.png";

let canocima = new Image();
canocima.src = "imagens/canocima.png";

let canobaixo = new Image();
canobaixo.src = "imagens/canobaixo.png";

// variaveis 
let eec = 100;  //espacos entre os canos
let constant;
let bX = 33;
let bY = 200;
let gravity = 1.4
let score = 0;
let cano = [];

cano[0] = {
    x : canvas.clientWidth,
    y : 0
}

//Carregando sons
let fly = new Audio();
//fly.src = "sounds/fly.mp3";

let scor = new Audio();
//scor.src = "sounds/score.mp3";


//captura de teclado
document.addEventListener('keydown', voa)

// voando
function voa(){
    bY = bY - 46;
    //fly,play();
}

function jogo(){
    //fundo do jogo
    ctx.drawImage(bg,0,0);
    //drawImage(imagem,x,y)
    console.log('------------------------------------------------------------')
    // criando canos
    for(var i = 0; i< cano.length; i++){
        console.log("aqui")
        // Posicao do cano de baixo
        constant = canocima.height + eec;
        //configurando cano de cima
        ctx.drawImage(canocima, cano[i].x, cano[i].y)
        //configurando cano de baixo
        ctx.drawImage(canobaixo, cano[i].x, cano[i].y+constant)
        //movimentacao do cano
        cano[i].x = cano[i].x - 1;
        if(cano[i].x == 125){
            console.log("aqui dentro do if")
            cano.push({
                x: canvas.width,
                y: Math.floor(Math.random()* canocima.height)-canocima.height
            })
        }

    }

    //chao
    ctx.drawImage(chao, 0,canvas.height - chao.height );


    //passaro
    ctx.drawImage(bird,bX,bY);
    bY += gravity;
    requestAnimationFrame(jogo);

}
jogo();
