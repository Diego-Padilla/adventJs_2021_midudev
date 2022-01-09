 function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
let gain = (-1)
  length = prices.length
    for(let index = 0; index <= length+1; index++){
      for(let subIndex = index; subIndex <= length+1; subIndex++){
         if(gain<(prices[subIndex]-prices[index])){
           gain = (prices[subIndex]-prices[index])
         }
      }
    }
    if(gain === 0) gain = -1
    return gain
}


function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
let gain = (-1)
  
  prices.forEach(element => {
    prices.forEach(element2 =>{
      if(
        gain<(element2 - element) &&
        prices.indexOf(element2) > prices.indexOf(element)) 
        gain = (element2 - element)
    });
  });
  return (gain === 0) ? gain = (-1) : gain
}

const pricesBtc = [18, 15, 12, 11, 9, 7]

console.log(maxProfit(pricesBtc))