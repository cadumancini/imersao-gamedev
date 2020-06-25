let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;
let imagemCeu;
let imagemBGDecor;
let imagemMiddle;
let imagemForeground;
let imagemGround;
let imagemDragao;
let cenario;
let somDoJogo;
let somDoPulo;
let somGameOver;
let personagem;
let inimigo;
let dragao;

const matrizInimigo = [
  [0 , 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 100],
  [105, 100],
  [210, 100],
  [315, 100],
  [0, 200],
  [105, 200],
  [210, 200],
  [315, 200],
  [0, 300],
  [105, 300],
  [210, 300],
  [315, 300],
  [0, 400],
  [105, 400],
  [210, 400],
  [315, 400],
  [0, 500],
  [105, 500],
  [210, 500],
  [315, 500],
  [0, 600],
  [105, 600],
  [210, 600],
  [315, 600],
];

const matrizPersonagem = [
  [0, 0], 
  [220, 0], 
  [440, 0], 
  [660, 0], 
  [0, 270], 
  [220, 270], 
  [440, 270], 
  [660, 270], 
  [0, 540], 
  [220, 540], 
  [440, 540], 
  [660, 540], 
  [0, 810], 
  [220, 810], 
  [440, 810], 
  [660, 810]
];

const matrizDragao = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 161],
  [205, 161],
  [410, 161],
  [615, 161],
  [0, 322],
  [205, 322],
  [410, 322],
  [615, 322],
  [0, 483],
  [205, 483],
  [410, 483],
  [615, 483],
];

function preload() {
  imagemCeu = loadImage('imagens/cenario/Sky.png');
  imagemBGDecor = loadImage('imagens/cenario/BG_Decor.png');
  imagemMiddle = loadImage('imagens/cenario/Middle_Decor.png');
  imagemForeground = loadImage('imagens/cenario/Foreground.png');
  imagemGround = loadImage('imagens/cenario/Ground.png');
  imagemPersonagem = loadImage ('imagens/personagem/correndo.png');
  imagemInimigo = loadImage ('imagens/inimigos/gotinha.png');
  imagemGameOver = loadImage ('imagens/assets/game-over.png');
  imagemDragao = loadImage ('imagens/outros/reddragonfly.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/game-over.mp3');
} 

function setup() {
  createCanvas(640, 480);
  frameRate(40);

  cenario = new Cenario(imagemCeu, imagemBGDecor, imagemMiddle,
    imagemForeground, imagemGround, 5);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270, somDoPulo);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104, 10);
  dragao = new Dragao(matrizDragao, imagemDragao, width*3, 307, 242, 205, 161, 10);
  
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  dragao.exibe();
  dragao.move();

  if(personagem.estaColidindo(inimigo)) {
    image(imagemGameOver, (width / 2) - 206, (height / 2) - 39);
    somDoJogo.stop();
    somGameOver.play();
    noLoop();
  }
}

function keyPressed() {
  if(key === 'ArrowUp')
    personagem.pula();
}

function touchStarted() {
  getAudioContext().resume();
}