class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'não possui ataque definido';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
const mago = new Heroi('Gandalf', 1000, 'Mago');
const guerreiro = new Heroi('Aragorn', 87, 'Guerreiro');
const monge = new Heroi('Aang', 112, 'Monge');
const ninja = new Heroi('Naruto', 16, 'Ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();     
ninja.atacar();     
