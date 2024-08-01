// function judgeCircle(moves: string): boolean {
//     let y:number=0;
//     let x:number=0;
//     // let moves=['U','D','R','L']
//     for(let i=0; i<moves.length; i++){
//         if(moves[i]==='U'){
//             y++
//         }else if(moves[i]==='D'){
//             y--
//         }else if(moves[i]==='R'){
//             x++
//         }else if(moves[i]==='L'){
//             x--
//         }
//     }
//     // console.log(x,y)
//     return x===0 && y===0
// // }

let variabelS = "abcd";
let variabelT = "abcde";
let result: string = "";
let array1 = variabelS.split("");
let array2 = variabelT.split("");
// if(variabelS==='')console.log(variabelT)
// else{
function findTheDifference(s: string, t: string): string {
  for (let i = 0; i < array2.length; i++) {
    const indeks = array2.indexOf(array1[i]);
    if (indeks !== -1) {
      array2.splice(indeks, 1);
    }
  }
  // }
  console.log(array2);
  return array2.toString();
}
