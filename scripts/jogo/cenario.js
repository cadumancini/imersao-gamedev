class Cenario {
  constructor(imagemCeu, imagemBGDecor, imagemMiddle,
    imagemForeground, imagemGround, velocidade) {
    this.velocidadeGrama = velocidade;
    this.velocidadeForeground = velocidade * 0.8;
    this.velocidadeMiddle = velocidade * 0.6;
    this.velocidadeBG = velocidade * 0.4;
    this.velocidadeCeu = velocidade * 0.2;
    this.x1Ceu = 0;
    this.x2Ceu = width;
    this.x1BG = 0;
    this.x2BG = width;
    this.x1Middle = 0;
    this.x2Middle = width;
    this.x1Foreground = 0;
    this.x2Foreground = width;
    this.x1Grama = 0;
    this.x2Grama = width;

    this.imagemCeu = imagemCeu;
    this.imagemBGDecor = imagemBGDecor;
    this.imagemMiddle = imagemMiddle;
    this.imagemForeground = imagemForeground;
    this.imagemGround = imagemGround;
  }
  
  exibe() {
    image(this.imagemCeu, this.x1Ceu, 0, width, height);
    image(this.imagemCeu, this.x2Ceu, 0, width, height);
    
    image(this.imagemBGDecor, this.x1BG, 0, width, height);
    image(this.imagemBGDecor, this.x2BG, 0, width, height);
    
    image(this.imagemMiddle, this.x1Middle, 0, width, height);
    image(this.imagemMiddle, this.x2Middle, 0, width, height);
    
    image(this.imagemForeground, this.x1Foreground, 0, width, height);
    image(this.imagemForeground, this.x2Foreground, 0, width, height);
    
    image(this.imagemGround, this.x1Grama, 0, width, height);
    image(this.imagemGround, this.x2Grama, 0, width, height);
  }
  
  move() {
    this.x1Ceu = moveUm(this.x1Ceu, this.velocidadeCeu);
    this.x2Ceu = moveUm(this.x2Ceu, this.velocidadeCeu);
    
    this.x1BG = moveUm(this.x1BG, this.velocidadeBG);
    this.x2BG = moveUm(this.x2BG, this.velocidadeBG);
    
    this.x1Middle = moveUm(this.x1Middle, this.velocidadeMiddle);
    this.x2Middle = moveUm(this.x2Middle, this.velocidadeMiddle);
    
    this.x1Foreground = moveUm(this.x1Foreground, this.velocidadeForeground);
    this.x2Foreground = moveUm(this.x2Foreground, this.velocidadeForeground);
    
    this.x1Grama = moveUm(this.x1Grama, this.velocidadeGrama);
    this.x2Grama = moveUm(this.x2Grama, this.velocidadeGrama);
  }
}

function moveUm (posicao, velocidade) {
  posicao -= velocidade;
  if(posicao <= -width)
    posicao = width;

  return posicao;
}