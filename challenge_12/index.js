function getMinJump(obstacles) {
let min_jump = 1

 while (obstacles.some(obtacle => obtacle % min_jump === 0)) min_jump++

 console.log(min_jump)
 return min_jump
}
 

console.log(getMinJump([2, 4, 6, 8, 10]))