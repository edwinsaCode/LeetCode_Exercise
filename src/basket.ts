// let input: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let input: number[] = [12, 10, 24, 12];
let higest_Score = [];
let lowest_Score = [];
for (let i = 0; i < input.length; i++) {
  //   console.log(input[i]);
  if (input[i] > input[0] && input[i] > input[i - 1]) {
    higest_Score.push(input[i]);
  }
  //   if (input[i] === input[0]) {
  //     higest_Score.push(input[i]);
  //   }
  else if (input[i] < input[0] && input[i] < input[i - 1]) {
    lowest_Score.push(input[i]);
  }
}
// for (let i = 0; i < input.length; i++) {
//   if (input[i] < input[0] && input[i] < input[i - 1]) {
//     lowest_Score.push(input[i]);
//   }
//   if (input[i] === input[0]) {
//     lowest_Score.push(input[i]);
//   }
// }
console.log(higest_Score);
console.log(higest_Score.length);
console.log(lowest_Score);
console.log(lowest_Score.length);
