function Multiplicar (a,b){
    return a / b;
}
var t = Multiplicar(26,3);
console.log(t);

const Myfunction = (...args) =>{
    console.log(args);
}
Myfunction(7 * 7);
