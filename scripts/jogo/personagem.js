class Personagem extends Animacao{
  constructor (matriz, imagem, x, variacaoY, largura, altura, 
    larguraSprite, alturaSprite, somPulo) {
    super (matriz, imagem, x, variacaoY, largura, altura, 
      larguraSprite, alturaSprite);

    //this.variacaoY = variacaoY;
    this.yBase = height - this.altura - this.variacaoY;
    //this.y = this.yBase;
    this.gravidade = 3;
    this.velocidadePulo = 0;
    this.pulosMaximos = 2;
    this.pulos = 0;
    this.somPulo = somPulo;
  }

  pula() {
    if(this.pulos + 1 <= this.pulosMaximos) {
      this.velocidadePulo = -30;
      this.pulos++;
      this.somPulo.play();
    }
  }

  aplicaGravidade() {
    this.y += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if(this.y > this.yBase) {
      this.y = this.yBase;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisaoLargura = 0.6;
    const precisaoAltura = 0.7;
    return collideRectRect(this.x, this.y, this.largura * precisaoLargura, this.altura * precisaoAltura,
                    inimigo.x, inimigo.y, inimigo.largura * precisaoLargura, inimigo.altura * precisaoAltura);
  }
}