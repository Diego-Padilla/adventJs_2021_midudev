function isValid(letter){
    let arr = letter.split('')
    let firstPar = arr.indexOf('(')
    let secondPar = arr.indexOf(')')

    console.log(firstPar,secondPar)

    let test1 = false; // check for a first parenthesis
    let test2 = true;  // check for error inside of the parenthesis
    
    if(firstPar !== -1 && secondPar !== -1 && secondPar !== firstPar+1){
        test1 = true;
        console.log("Test1 success")
    }
    
    if( 
        arr.includes(']') ||
        arr.includes('[') ||
        arr.includes('{') ||
        secondPar === firstPar+1 ||
        firstPar+1==='(' ||
        secondPar < firstPar ||
        arr.includes('}')   
    ){
        test2 = false;
        console.log("Test2 fail")
        
    }

   for(let i = 0; i < arr.length; i++){
       if(arr[i] === '(' && arr[i+1]==')'){
        console.log("Test2 fail")
            test2 = false;
       }
   }

    if(test1 && test2){
        console.log("Test2 Success")
        console.log('valid')
        return true
    }else{
        console.log('invalid')
        return false
    }
}



   let carta = ")bici( casa play ";
    
   isValid(carta)