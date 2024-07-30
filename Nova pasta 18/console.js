console.log('ola pessoal');

let numero1 = 3;
let numero2 = 2; 

let resultado = numero1 + numero2;

console.log("o resultado é:" +resultado);

var nome ='eduardo';
var idade ='18 anos';

console.log(nome,idade);

function imprimir () {
    var nome ='eduardo';
    var idade ='18 anos';

    console.log(nome,idade);
    } 
console.log("como que se cria o mundo ");

let numero3 = 6;
let numero4 = 2;

let resultado2 = numero3 / numero4;

console.log("o resultado gerol: "+ resultado2);

console.log("o resultado é:" +resultado * + resultado2);

var nome1 = 'valor1';

console.log(nome1);

const myfunction1 = (...args) => {
   console.log(args);
};
myfunction1(4 * 6); // Output: [4, 6]

  
  function multiplica(a, b ) {

    return a * b ; //retornar o produto de dois numeros
  }
  var x = multiplica(4, 6); //chama a funcao passando os argumentos
  console.log(x);          //com valores e armazenada em x
  
  function somar(a, b) {
    return a + b ;
  }
  var y = somar(25, 36);
  console.log(y); 

  console.log(1 != 2) //true
  console.log(1 != '1') //false 
  console.log(0 != null) //true

  console.log(2 < 3 || 3 > 2) //true
  console.log(2 < 3 || 3 < 2) //true
  console.log( 2 < 3 || 3 > 2 || 10 <= 100) //true

const myfunction3 = (...args) => {
  console.log(args);
}
myfunction3 (4 + 6);

function subtrair  (a,b) {
  return a - b ;
}
var c = subtrair (4, 9);
console.log (c) 

function somar2 (a, b) {
  return a + b;
}
var w = somar2 (46, 87);
console.log(w); 

const Myfunction2 = (...args) => {
  console.log(args);
}
Myfunction2 (47 + 52); //output[47, 52] 
 
function multiplica2 (a, b) {
  return a / b;
}
var o = multiplica2 (96, 3);
console.log(o);

const Myfunction4 = (...args) => {
  console.log(args);
}
Myfunction4 (123 * 675); //Output [123, 675]

class vampire {
  constructor(props) {
    this.location = props.location;
  }
}

