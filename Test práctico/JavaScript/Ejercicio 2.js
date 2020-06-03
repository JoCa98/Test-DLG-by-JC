//José Carlos Chávez Morán

number = prompt("Ingrese un número para sacar el fatorial:");

console.log("Resultado:");
for(i=0; i<=number; i++){
  console.log(i + "! = " + factorial(i));
}


function factorial(n){
  if(n == 0){
    return 1;
  } 
  return n * factorial(n - 1);
};