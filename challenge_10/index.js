 function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  let coins = []
  coins[0] = 1
  coins[1] = 2 
  coins[2] = 5 
  coins[3] = 10
  coins[4] = 20
  coins[5] = 50
  let rest = change;
  let arr = []
  arr.length = coins.length
  arr = arr.fill(0)
  
  


   for (let index = 5; index >= 0; index--) {

     if (rest >= coins[index]){
       arr[index] +=  1
       rest -= coins[index]
     }
      for (let index2 = 5; index2 >= 0; index2--) {
    
        if (rest >= coins[index2]){
          arr[index2] +=  1
          rest -= coins[index2]
        }
        
        }  
     
    }  
    
    
    console.log('rest: ',rest)
 
  return arr
}

console.log(getCoins(100))