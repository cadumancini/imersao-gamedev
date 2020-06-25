class Dragao extends Animacao {
  constructor (matriz, imagem, x, largura, altura, 
    larguraSprite, alturaSprite, velocidade) {
    super (matriz, imagem, x, height - 400, largura, altura, 
      larguraSprite, alturaSprite);
    this.velocidade = velocidade;
  }

  move () {
    this.x -= this.velocidade;

    if(this.x < -this.largura)
      this.x = width * 3;
  }
}