function groupBy(collection, it) {
  // ¡No olvides compartir tu solución en redes!

  let obj = {}
  let value = 0
  // on function case
  if(typeof it === 'function'){
      collection.forEach(element => {
        value = it(element)

        if(obj[value]){
          obj[value] = [...obj[value],element]
          
        }else{
          obj[value] = [element]
        }
      }); 


    }else{
      
      collection.forEach(element => {
        value = element[it]
        
        if(obj[value]){
          obj[value] = [...obj[value],element]

          
        }else{
          obj[value] = [element]
          
          
        
        }
      });
    }
  

  return obj
}

let arr = ['one', 'two', 'three']
let a = groupBy(arr, 'length')




console.log(a);
