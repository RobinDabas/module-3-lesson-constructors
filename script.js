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

//I just returned to studying code after 2 weeks away


function Book(title, price, author) {
  this.title = title;
  this.price = price;
  this.author = author;
  this.inStock = true;
  this.applyDiscount = function(discount) {
    this.price -= price * (discount / 100);
  };
}

const book1 = new Book('JavaScript Made Easy', 30.99, 'Robin Dabas')
book1.applyDiscount(20);
console.log(book1.price)

//Finished Meta Coursera Front-end Dev - Module 3 Lesson: Constructors 
//Practiced with various exercisesw with the assistance of Grok


function Musician(genre, song, author) {
  this.genre = genre;
  this.song = song;
  this.author = author;
  this.inStock = function() {
    console.log(`${this.author} es una artista gigante en el mundo hispanohablante.`)
  }
}

const musician = new Musician('reggaeton', 'Secreto', 'Anuel AA')
console.log(musician);
musician.inStock();


let pajaro = {
  tieneAlas: true,
  puedeVolar: true,
  tienePlumas: true
}

let agila1 = Object.create(pajaro);
console.log('agila1: ', agila1)

console.log('agila1 tiene alas:', agila1.tieneAlas);
console.log('agila1 puede volar:', agila1.puedeVolar);
console.log('agila1 tiene plumas:', agila1.tienePlumas)


function Artista(nombre, éxito) {
  this.nombre = nombre;
  this.éxito = éxito;
}

Artista.prototype.actuación = function() {
  console.log(`${this.nombre} enloquece al público con su canción ${this.éxito}.`)
}

function Cantante(nombre, éxito) {
  Artista.call(this, nombre, éxito);
}
Cantante.prototype = Object.create(Artista.prototype);
Cantante.prototype.flow = function() {
  console.log(`${this.nombre} es un cantante cheverísimo.`)
};
Cantante.prototype.flow2 = function() {
  console.log(`${this.nombre} es una cantante cheverísima.`)
}

const cantantePrincipal = new Cantante('Anuel AA', 'Secreto');
const cantanteDestacada = new Cantante('Karol G', 'Secreto')

cantantePrincipal.actuación();
cantantePrincipal.flow();
cantanteDestacada.actuación();
cantanteDestacada.flow2();



function Artist(name, genre) {
  this.name = name;
  this.genre = genre;
}

Artist.prototype.performance = function() {
  console.log(`${this.name} is one of the best artists in the Arabian Peninsula in the genre of ${this.genre}, a traditional Arabian music found in countries like Yemen, Libya and the rest of the GCC countries.`)
}

function Singer(name, genre) {
  Artist.call(this, name, genre)
}
Singer.prototype = Object.create(Artist.prototype)
Singer.prototype.flow = function() {
  console.log(`${this.name} has an amazing voice and really nice songs that are listened too all throughout the Arab world from Algeria all the way to Oman.`)
}
Singer.prototype.flow2 = function() {
  console.log(`${this.name} is a ${this.genre} singer and has amazing songs that pump you for lifting weights in the gym.`)
}

const yemeniSinger = new Singer('Abu Hanthala', 'Shaylat');
const saudiSinger = new Singer('Fahed Abu Fasla', 'Shaylat')

yemeniSinger.performance();
yemeniSinger.flow();
saudiSinger.performance();
saudiSinger.flow2();





























