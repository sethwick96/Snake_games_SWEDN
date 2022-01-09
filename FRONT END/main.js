//Snake Items
const snake_col = 'black';
const snake_border = 'white';

let snake = [
    {x: 200, y: 200}
]

//import board
function Init() {
    const snakeboard = document.getElementById("gameBoard");
    //make the board a 2d canvas
    const snakeboard_ctx = snakeboard.getContext("2d");
}

//start game
Main();

function Main() {
    drawSnake();
}

function drawSnake() {
    snake.forEach(drawSnakePart)
}
function drawSnakePart(snakePart){
    snakeboard_ctx.fillStyle = snake_col;
    snakeboard_ctx.strokefill = snake_border;
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    // Draw a border around the snake part
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);

}
  
  //import the snake food










window.onload = Init;
console.log("This Works!");
