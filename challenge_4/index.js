function createXmasTree2(height) {
    
// n*2-1

let width = (height*2)-1
let tree = ''
let space 
let pine

let arr = [...Array(height).keys()];

let foot

// arr.forEach(element => {

//     let pine_Size = ((arr.indexOf(element)+1)*2)-1     // n*2 - 1 is the equation for each tree step
    
//     let space_Size = (pine_Size>width) 
//     ? Math.ceil(width/2-1) 
//     : (width/2) - (pine_Size/2)

//     space = '_'.repeat(space_Size) 
    
//     //tree level branches
//     pine = '*'.repeat(pine_Size);

//     // tree draw 
//     tree = tree+'\n' + space+pine+space
    
// });   // using a for loop to make each tree level




for (let iterator = 0; iterator < height; iterator++) {

    for (let space = 1; space < height - iterator; space++) {
        tree+='_'
    }

    for (let star = 0; star <= iterator; star++) {
        tree += (star === 0) ? '*' :'**'
    }

    for (let space2 = 1; space2 < height - iterator; space2++) {
        tree+='_'
    }

    tree += '\n'
}


// the tree trunk
foot = '_'.repeat(Math.ceil(width/2-1)) + '#' + '_'.repeat(Math.ceil(width/2-1))
foot = foot + '\n'+ foot

tree = tree + foot
    
// Making the tree level
    //Tree level empty space
return tree
}

function createXmasTree(height) {
    
// n*2-1

let width = (height*2)-1
let tree = ''
let foot

for (let iterator = 0; iterator < height; iterator++) {

    for (let space = 1; space < height - iterator; space++) {
        tree+='_'
    }

    for (let star = 0; star <= iterator; star++) {
        tree += (star === 0) ? '*' :'**'
    }

    for (let space2 = 1; space2 < height - iterator; space2++) {
        tree+='_'
    }

    tree += '\n'
}

// the tree trunk
foot = '_'.repeat(Math.ceil(width/2-1)) + '#' + '_'.repeat(Math.ceil(width/2-1))
foot = foot + '\n'+ foot

tree = tree + foot
    
// Making the tree level
    //Tree level empty space
return tree
}

let k = createXmasTree(2)
console.log(k)
