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