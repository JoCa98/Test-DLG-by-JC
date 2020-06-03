//José Carlos Chávez Morán

console.log(specialMultiplication([2, 3, 4, 6]));

console.log(specialMultiplication([123, 67, 890, 4]));

console.log(specialMultiplication([2, 3, 7, 9, 4, 5, 6, 9,12]));


function specialMultiplication(arrayVar){
    tmp = new Array(arrayVar.length);

    for(i=0;i < arrayVar.length; i++) {
      tmp[i] = 1;
      for(j=0; j< arrayVar.length ; j++){
        if (j != i){
          tmp[i] *= arrayVar[j];
        }  
      }
    };
    return tmp;
};