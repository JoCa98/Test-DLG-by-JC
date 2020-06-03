//José Carlos Chávez Morán

class Ejercicio5 {
  public static void main(String[] args) {
    int[] numbers = {1,2,2,5,4,6,7,8,8,8};

    int count1 = 0;
    int count2 = 0;
    int number1 = numbers[0];
    int number2 = 0;

    for(int i = 0; i < numbers.length; i++) {
      if (number1 == numbers[i]){
        count1 += 1;
      } else if (number1 != numbers[i]){
        if(count1 > count2){
          number2 = number1;
          count2 = count1;
        } else {
          number1 = numbers[i];
          count1 = 1;
        }
      }
    }

    if (count1 > count2){
      System.out.println("Ocurrencias: " + count1);
      System.out.println("Número: " + number1);
    } else{
      System.out.println("Ocurrencias: " + count2);
      System.out.println("Número: " + number2);
    }
  }
}