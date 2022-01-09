//Snake Items
const snake_col = 'black';
const snake_border = 'white';

let snake = [
    {x: 10, y: 10}
]

//import board
    const snakeboard = document.getElementById("gameCanvas");
    //make the board a 2d canvas
    const snakeboard_ctx = snakeboard.getContext("2d");
//start game
Main();

function Main() {
    drawSnake();
}

function drawSnake() {
    
}
console.log("This Works!");
