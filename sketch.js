let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;
let imagemCeu;
let imagemBGDecor;
let imagemMiddle;
let imagemForeground;
let imagemGround;
let imagemTroll;
let imagemVoador;
let cenario;
let somDoJogo;
let somDoPulo;
let somGameOver;
let personagem;

const matrizInimigo = buildMatrix(7, 4, 105, 100);
const matrizPersonagem = buildMatrix(4, 4, 220, 270);
const matrizTroll = buildMatrix(6, 5, 400, 400);
const matrizVoador = buildMatrix(6, 3, 200, 150);
matrizTroll.length = 28; // desconsiderando 2 últimos elementos, pois não tem imagem.
matrizVoador.length = 16; // desconsiderando 2 últimos elementos, pois não tem imagem.

const inimigos = [];

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
  imagemTroll = loadImage('imagens/inimigos/troll.png');
  imagemVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
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

  inimigos.push(new Inimigo(matrizInimigo, imagemInimigo, 0, 30, 52, 52, 104, 104, 10, 400));
  inimigos.push(new Inimigo(matrizTroll, imagemTroll, 0, 0, 200, 200, 400, 400, 15, 2000));
  inimigos.push(new Inimigo(matrizVoador, imagemVoador, 0, 200, 100, 75, 200, 150, 10, 600));
  
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
  });

  cenario.exibeGrama();

  inimigos.forEach(inimigo => {
    /* if(personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, (width / 2) - 206, (height / 2) - 39);
      somDoJogo.stop();
      somGameOver.play();
      noLoop();
    } */
  });
  
}

function keyPressed() {
  if(key === 'ArrowUp')
    personagem.pula();
}

function touchStarted() {
  getAudioContext().resume();
}