window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;

    // Chamada do jogo a cada 100 milisegundo
    setInterval(jogo, 100)

    //controles
    document.addEventListener("keydown", function(e){       
        //verificar o keyCode para possivel subistituto 
        switch(e.keyCode){
            // seta direita
            case 39:
                if(velX != -1){
                    velX = 1;
                    velY = 0;
                }
                break;
            // seta esquerda
            case 37:
                if(velX != 1){
                    velX = -1;
                    velY = 0;
                }
                break;
        
            // seta cima
            case 38:
                if(velY != 1){
                    velX = 0;
                    velY = -1;
                }
                break;

            // seta baixo
            case 40:
                if(velY != -1){
                    velX = 0;
                    velY = 1;
                }
                break;       
        }
    });
}
function jogo(){
    
    // configuracao de tela
    ctx.fillStyle = "#2980b9";

    // distancia borda h, distancia borda v, largura, altura
    ctx.fillRect(0,0, canvas.width, canvas.height)

    // deslocamento da cobra
    positionX += velX;
    positionY += velY;

    //espelhamento
    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0
    }   
    
    // configuracao da cobra
    ctx.fillStyle = "#00f102";
    for(let i=0; i< snake.length; i++){       
        ctx.fillRect(snake[i].x * grid, snake[i].y * grid , grid-1, grid-1);        
        if(snake[i].x == positionX && snake[i].y == positionY){
            tam = 3;
        }        
    }
    //Posicionando a cobra
    snake.push({x: positionX, y: positionY})
    
    // apagando
    while(snake.length > tam){
        snake.shift()
    }
    
    // configurando a comida
    ctx.fillStyle = "#f1c40f"
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1)

    //comendo a comida
    if(positionX == foodX && positionY == foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }

}
