var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var air = new Image();
var bg = new Image();
var fg = new Image();
var astUp = new Image();
var astBottom = new Image();

air.src = "../img/air.png";
bg.src = "../img/sky.jpg";
fg.src = "../img/fg.png";
astUp.src = "../img/ast.png";
astBottom.src = "../img/ast.png";

// Звуковые файлы
var fly = new Audio();
var score_audio = new Audio();

fly.src = "../audio/fly.mp3";
score_audio.src = "../audio/score.mp3";

var gap = 90;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
  yPos -= 25;
  fly.play();
}

// Создание блоков
var ast = [];

ast[0] = {
  x : canvas.width - 350,
  y : 0
}

var score = 0;

// Позиция самолёта
var xPos = 30;
var yPos = 150;
var grav = 1.5;


function draw() {
  ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < ast.length; i++) {
    ctx.drawImage(astUp, ast[i].x, ast[i].y);
    ctx.drawImage(astBottom, ast[i].x, ast[i].y + astUp.height + gap);
  
    ast[i].x--;

    if (ast[i].x == 125) {
      ast.push({
        x : canvas.width - 250,
        y : Math.floor(Math.random() * astUp.height) - astUp.height
      });
    }

    if (xPos + air.width >= ast[i].x && xPos <= ast[i].x 
      && xPos <= ast[i].x + astUp.width
      && (yPos <= ast[i].y + astUp.height
        || yPos + air.height >= ast[i].y + astUp.height + gap)) {
          location.reload(); // перезагрузка страницы
        }

    if(ast[i].x == 5) {
      score++;
      score_audio.play();
    }
  }
  
  ctx.drawImage(fg, 495, 0);
  ctx.drawImage(air, xPos, yPos);

  yPos += grav;

  ctx.fillStyle = "#000";
  ctx.font = "24px Verdana";
  ctx.fillText("Счет: " + score, 510, 30);

  requestAnimationFrame(draw);
}

bg.onload = draw;