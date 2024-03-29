//import board
    let snakeboard = document.getElementById("gameCanvas");
    //make the board a 2d canvas
    let snakeboard_ctx = snakeboard.getContext("2d");
    //set x and y for snakeboard_ctx
    let snake_x = 100
    let snake_y = 50
    //set image variable
    let img = document.getElementById("mc");
    //set start button
    let start = document.getElementById("button");

function startGame() {
    clearBoard();
    drawSnake();  
    moveSnake();
}
//clear the board
function clearBoard(){
    snakeboard_ctx.clearRect(0, 0, snakeboard.width, snakeboard.height);
}
//draw the snake on the canvas
function drawSnake(){
    snakeboard_ctx.drawImage(img,snake_x,snake_y,40,20);
}
//move the snake
function moveSnake(){
    let modifier = 2;
    window.addEventListener('keydown', (event) => {
        const {style} = img;
        switch(event.key) {
            case 'ArrowUp': style.top = `${parseInt(style.top) - modifier}px`; break;
            case 'ArrowDown': style.top = `${parseInt(style.top) + modifier}px`; break;
            case 'ArrowLeft': style.left = `${parseInt(style.left) - modifier}px`; break;
            case 'ArrowUp': style.top = `${parseInt(style.left) + modifier}px`; break;
        }
    })
};
startGame()
//start game using start button
start.addEventListener("click", startGame);


console.log("This Works!");
