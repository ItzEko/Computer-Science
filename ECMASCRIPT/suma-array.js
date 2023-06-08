//los tipos de variable son importantes
//CONST:variables que no se modifican (no se cambian ya que es constante(no puede ser alterado, valor fijo))
//LET : variables modificadas por bloque 

const array=[21,7,9,15,95];
let suma=0;


//ponemos "i < array.length" que nos indica el tamaño del arreglo independiente de si se le agrega elementos o se restan
for (let i = 0; i < array.length; i++) {
    //i= es la posicion en que se va a encontrar el numero de inicializacion del array
    //i = i + 1; esto es igual a "i++" osea que va a incrementar de uno en uno los elementos del array
    suma += array[i];
    
}
console.log(suma);
