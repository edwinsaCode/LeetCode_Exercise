let grid: number[][] = [
    // [1,0]
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
let perimeter = 0;
let row = grid.length;
let col = grid[0].length;

for (let a = 0; a < row; a++) {
    // console.log(grid[a],"--")
    for (let b = 0; b < col; b++) {
        if (grid[a][b] === 1) {
            // atas
            if (a === 0 || grid[a - 1][b] === 0){
             perimeter++;
            }

            // kiri
            if (b === 0 || grid[a][b - 1] === 0) {
                perimeter++;
            }

            // bawah
            if (a === row - 1 || grid[a + 1][b] === 0) {
                perimeter++;
            }

            // kanan
            if (b === col - 1 || grid[a][b + 1] === 0) {
                perimeter++;
            }
        }
    }
}
console.log(perimeter,row,col);

