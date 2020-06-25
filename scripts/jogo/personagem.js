class Personagem extends Animacao{
  constructor (matriz, imagem, x, largura, altura, 
    larguraSprite, alturaSprite) {
    super (matriz, imagem, x, largura, altura, 
      larguraSprite, alturaSprite);

    this.yBase = height - this.altura;
    this.y = this.yBase;
    this.gravidade = 3;
    this.velocidadePulo = 0;
  }

  pula() {
    this.velocidadePulo = -30;
  }

  aplicaGravidade() {
    this.y += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if(this.y > this.yBase)
      this.y = this.yBase;
  }

  estaColidindo(inimigo) {
    const precisaoLargura = 0.6;
    const precisaoAltura = 0.7;
    return collideRectRect(this.x, this.y, this.largura * precisaoLargura, this.altura * precisaoAltura,
                    inimigo.x, inimigo.y, inimigo.largura * precisaoLargura, inimigo.altura * precisaoAltura);
  }
}