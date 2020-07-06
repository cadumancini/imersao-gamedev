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

const matrizInimigo = buildMatrix(7, 4, 105, 100);
const matrizPersonagem = buildMatrix(4, 4, 220, 270);
const matrizDragao = buildMatrix(4, 4, 205, 161);

function buildMatrix(linhas, colunas, larguraSprite, alturaSprite) {
  var matrix = [];
  for(var y = 0; y < linhas; y++)
    for(var x = 0; x < colunas; x++)
      matrix.push([x * larguraSprite, y * alturaSprite]);
  return matrix;
}

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
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270, somDoPulo);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
  dragao = new Dragao(matrizDragao, imagemDragao, width*3, 250, 307, 242, 205, 161, 10);
  
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

  cenario.exibeGrama();

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