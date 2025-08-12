function Lion(name) {
  this.name = name;
  this.roar = function() {
    console.log(`${this.name} says roar.`)
  }
}

const simba = new Lion('Simba');
const scar = new Lion('Scar');

simba.roar();
scar.roar();


function Snake(name) {
  this.name = name;
  this.hiss = function() {
    console.log(`${this.name} is hissing.`)
  }
}

const python = new Snake('Python')
const anaconda = new Snake('Anaconda')

python.hiss();
anaconda.hiss();