function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
  
  let more_gifts = [...Array(gifts.length+2).keys()]
  
let rep_Size = 2+gifts[0].length

  more_gifts[0] = '*'.repeat(rep_Size) 

  for (let index = 0; index < gifts.length; index++) {
    let emoj = gifts[index]
    more_gifts[index+1] = '*'+ emoj + '*'
  }
  
  // 1 = 4
  // 2 = 6
  // 3 = 8
  
  
  more_gifts[more_gifts.length-1] = '*'.repeat(rep_Size)


  

    return more_gifts
  }
  
  let l = wrapGifts(['📷','📷'])
  let f = [1,2]
  console.log(l )