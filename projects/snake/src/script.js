//Initializing code here//
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext('2d')

canvas.width = 500;
canvas.height = 500;

growing = false

snake = [[250,250]]
radius = 10

dx = 0
dy = 0

appleX = 0
appleY = 0

speed = 10
//////////////////////////
// game state variables //

//main game loop that runs the game.

interval = setInterval(game,100)

moveApple()

function game() {
    clearCanvas()
    moveSnake()
    drawApple()
    checkApple(snake[0][0],snake[0][1])
    console.log("Apple: ", appleX, ", ", appleY)
    console.log("Snake: ", snake[0][0], snake[0][1])
    
}

function drawApple(){
    drawShape(appleX, appleY, "red")
}

function clearCanvas(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function moveSnake(){
  
  snake.unshift([snake[0][0]+dx*speed,snake[0][1]+dy*speed])
  if (growing == false){
    snake.pop()
  }
  else{
    growing = false
  }
  for(let i = 0; i < snake.length; ++i){
    drawShape(snake[i][0], snake[i][1], "green")
  }
  
}

// HELPER FUNCTIONS FOR THE GAME //
// Player Controls
//Player controls
var UP_KEY = 38;
var DOWN_KEY = 40;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
window.onkeydown = KeyDown;
function KeyDown(event) {
	 if (event.keyCode == UP_KEY) {
     console.log("UP")
     dx = 0
     dy = -1
      
	} else if (event.keyCode == DOWN_KEY) {
    console.log("DOWN")
    dx = 0
    dy = 1

	} else if (event.keyCode == LEFT_KEY) {
    console.log("LEFT")
    dx = -1
    dy = 0
    

	} else if (event.keyCode == RIGHT_KEY) {
    console.log("RIGHT")
    dx = 1
    dy = 0
	}
}
//draws the circles to create the snake
function drawShape(x, y, color) {
  ctx.beginPath()
  ctx.arc(x,y,radius,0,360)
  ctx.fillStyle = color
  ctx.fill()
  ctx.closePath()
}

//returns a random integer between the minimum and the maximum number
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function moveApple(){
  appleX = randomInt(0,500)
  appleY = randomInt(0,500)
}


//checks if the snake is eating the apple
function checkApple(x, y) {
  if (appleX < x+10 && appleX > x-10 && appleY > y-10 && appleY < y+10){
    console.log("Touching apple")
    growing = true 
    moveApple()
  }
}
//checks if the snake is touching itself, does not check the last position in the array, because that is the head.
function checkSelf(x, y) {
  //your code here
}

//checks if the snake is touching a wall.
function checkWalls(x, y) {
  //your code here
}