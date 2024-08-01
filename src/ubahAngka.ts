// let numm = 11891;
// let str1 = "";
// let str2 = "";
// for (let a = 0; a < numm.toString().length; a++) {
//   if (numm.toString()[0] < "9" && numm.toString()[0] === numm.toString()[a]) {
//     str1 += 9;
//   } else if (numm.toString()[0] === "9") {
//     for (let c = 1; c < numm.toString().length; c++) {
//       if (numm.toString()[c] <= "9") str1 += 9;
//       break;
//     }
//   } else {
//     str1 += numm.toString()[a];
//   }
// }

// for (let b = 0; b < numm.toString().length; b++) {
//   if (numm.toString()[0] < "9" && numm.toString()[0] === numm.toString()[b]) {
//     str2 += 0;
//   } else if (numm.toString()[0] === "9") {
//     str2 += 0;
//   } else {
//     str2 += numm.toString()[b];
//   }
// }
// console.log(str1, "/", str2);
// console.log(parseInt(str1) - parseInt(str2));

let minimum: null | number = null;
let nummm = 11891;
let maximum = 0;

for (let i = 0; i < nummm.toString().length; i++) {
  let saveMin = "";
  let saveMax = "";
  for (let j = 0; j < nummm.toString().length; j++) {
    if (nummm.toString()[j] === nummm.toString()[i]) {
      saveMax += "9";
      saveMin += "0";
    } else {
      saveMax += nummm.toString()[j];
      saveMin += nummm.toString()[j];
    }
  }
  console.log(saveMax, saveMin);
  if (parseInt(saveMax) > maximum) {
    maximum = parseInt(saveMax);
  }
  if (minimum === null) {
    minimum = parseInt(saveMin);
  } else if (parseInt(saveMin) < minimum) {
    minimum = parseInt(saveMin);
  }
}
if (minimum !== null) {
  console.log(maximum - minimum);
}
