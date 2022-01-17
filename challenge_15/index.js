function checkSledJump(heights) {
  
 let prev = heights[0], up = true;

 for (let index = 1; index < heights.length; index++) {

   if(
      heights[index] === prev ||
      !up &&
      heights[index] > prev
      )  return false

    if(heights[index] < prev && up) up = false

    prev = heights[index]

   
 }
 return !up

}



console.log(a)

