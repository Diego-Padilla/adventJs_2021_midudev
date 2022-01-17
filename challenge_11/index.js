export default function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  let price = 250
  for (let index = 1; index < times; index++) {
    price += (12*Math.pow(0.75,index))
    
  }
  let normalPrice = 12*times

  return (normalPrice > price) ? true : false
  
}