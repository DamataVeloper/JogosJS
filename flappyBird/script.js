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
let eec = 150;  //espacos entre os canos
let constant;
let bX = 33;
let bY = 200;
let gravity = 1.4
let score = 0;
let cano = [];
let contador = 0;
let contadorChao = 0;
let contadorAltura = 0;

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
/*
document.addEventListener('keydown', (evento) =>{
    
    if(evento.key == "ArrowUp"){
        console.log("cima")
        bY = bY - 5;
    }
    if(evento.key == "ArrowDown"){
        console.log("baixo")
        bY = bY + 5;
    }
})
*/

document.addEventListener('keydown', voa) 


// voando
function voa(){

    bY = bY - 36;
    //fly,play();
}

function jogo(){
    //fundo do jogo
    ctx.drawImage(bg,0,0);
    //drawImage(imagem,x,y)
  
    // criando canos
    for(var i = 0; i< cano.length; i++){
        // Posicao do cano de baixo
        constant = canocima.height + eec;
        //configurando cano de cima
        ctx.drawImage(canocima, cano[i].x, cano[i].y)
        //configurando cano de baixo
        ctx.drawImage(canobaixo, cano[i].x, cano[i].y+constant)
        //movimentacao do cano
        cano[i].x = cano[i].x - 1;
        if(cano[i].x == 125){
            
            cano.push({
                x: canvas.width,
                y: Math.floor(Math.random()* canocima.height)-canocima.height
            })
        }
        // passaro entre as bordas do cano
        
        if(bX + bird.width >= cano[i].x && bX <= cano[i].x + canocima.width 
            //passaro colidiu com o cano de cima ou cano de baixo
            && (bY <= cano[i].y + canocima.height || bY + bird.height >= cano[i].y + constant)
            //passaro colidiu com o chao
            || bY + bird.height >= canvas.height - chao.height){

                location.reload();
                console.log("bateu")    
            
        }

        if(cano[i].x == 5){
            score = score + 1;
            //score.play();
        }
    }

    //chao
    ctx.drawImage(chao, 0,canvas.height - chao.height );


    //passaro
    ctx.drawImage(bird,bX,bY);
    bY += gravity;


    //Cria placar
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Placar: " +  score, 10, canvas.height-20);

    requestAnimationFrame(jogo);

}
jogo();
