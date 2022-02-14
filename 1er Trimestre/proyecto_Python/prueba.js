
var cadena=new Array();
//Importante recordar que comienza en 0
cadena[0]="rojo";
cadena[1]="amarillo";
alert(cadena[1]);//La mostramos
//Segunda forma de declarar y asignar valores a Arrays
var posts = ["Hola a todos!","Me encanta el riesgo"];
//a continuación se muestra en la consola todo el Array y el número de elementos que tiene
console.log(posts);
console.log(posts.length);
//Con push agregamos nuevo elemento
posts.push("nuevo elemento");
//Con Splice eliminamos elementos de un Array. Primer parámetro para inidcar a partir de dónde y el segundo para indicar el número de elementos a eliminar
posts.splice(1,1);
//Compruba cuál se ha eliminado mostrando de nuevo el Array
console.log(posts);
//También podemos agregar con splice, indicando que vamos a eliminar 0 elementos. Observa que se agrega en la posición indicada
posts.splice(1,0,"Nuevo post");
console.log(posts)