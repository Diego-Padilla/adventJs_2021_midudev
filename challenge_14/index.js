function missingReindeer(ids) {
  

  ids.sort((a,b)=>a-b);

    let op = [...Array(ids.length+5).keys()]


    for (let index = 0; index < op.length; index++) {
      if(!ids.includes(op[index])) return op[index]
      
    }


// if(ids.length>1){
//   for (let index = 0; index < ids.length; index++) {
//     if(ids[index]+1 !== ids[index+1]) return  missing = ids[index]+1        
//   }
// }

// if(ids.length === 1){
//   return missing = ids[0]+1
// }




}
  
  let a = missingReindeer(([5, 6, 1, 2, 3, 7, 0]))
  
  console.log(a)
  
