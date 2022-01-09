 function sumPairs(numbers, result) {
  
  // ¡Y no olvides compartir tu solución en redes!
  /** 
   *  idea 1:
   * make two for loops, one inside the other to get the result, 
   * the problem with this method is the compute cost
   * idea 2 :
   * 
   * 
   * 
   * 
  */
  let num1 = 0;
  let num2 = 0;

 let lght = numbers.length;

  for(let index = 0; index < lght+1; index++){
    num1 = numbers[index];
    
    for(let index2 = 0; index2 < lght+1; index2++){
      if( index !== index2)num2 = numbers[index2]
      
      if((num1 + num2) === result) return [num1, num2]
      if(num1 === undefined) return null
    
    }
  }

}
 
const arr = [0, 2, 2, 3, -1, 1, 5];
let a = sumPairs(arr,6)
console.log( a)