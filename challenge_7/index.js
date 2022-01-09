function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!
return Object.keys(store).reduce((productExist,key)=>
  typeof store[key] === 'object' 
  ? contains(store[key], product) 
  : store[key] === product, false)
}
 
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
let a = contains(almacen, 'camiseta') // true
console.log(a)