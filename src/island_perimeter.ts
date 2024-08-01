let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
let perimeter=0
let row=grid.length
let col=grid[0].length

for(let a=0; a<row; a++){
    for(let b=0; b<col; b++){
        if(grid[a][b]===1){
            if(a===1 || grid[a-1][b]===0)perimeter++
            if(b===1 || grid[a][b-1]===0)perimeter++
            
        }
    }
}
console.log(perimeter*2)