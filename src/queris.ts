// let list = ["aba", "baba", "aba", "xzxb"];
// let queris = ["aba", "xzxb", "ab"];
// let list = ["def", "de", "fgh"];
// let queris = ["de", "lmn", "fgh"];
let list = [
  "abcde",
  "abcdef",
  "abcdefg",
  "xyzabcdefgh",
  "sdaklfj",
  "xyzasdjf",
  "asdjf",
  "xyzasdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
  "na",
  "asdjf",
  "na",
  "mmmnavvv",
  "basdn",
  "sdaklfj",
  "asdjf",
];
let queris = ["abcde%", "sdaklfj", "%asdjf", "%na%", "basdn"];
let total = [];
// let selisih=0

for (let i = 0; i < queris.length; i++) {
  let freq = 0;
  for (let j = 0; j < list.length; j++) {
    if (queris[i] === list[j]) {
      freq += 1;
    } else if (queris[i].includes("%")) {
      let getQueris = "";
      let getString = "";
      if (
        queris[i].indexOf("%") === 0 &&
        queris[i].slice(queris[i].length - 1) === "%"
      ) {
        getQueris = queris[i].slice(1, queris[i].length - 1);
        if (queris[j].includes(getQueris)) {
          freq += 1;
        }
      } else if (queris[i].indexOf("%") === 0) {
        getQueris = queris[i].slice(1);
        getString = list[j].slice(list[j].length - getQueris.length);
      } else if (queris[i].indexOf("%") === queris[i].length - 1) {
        getQueris = queris[i].slice(0, queris[i].length - 1);
        getString = list[j].slice(0, queris[i].length - 1);
      }
      //       console.log(getQueris, getString);
      if (getQueris === getString) {
        freq += 1;
      }
    }
  }
  total.push(freq);
  // console.log(freq, "--");
}
console.log(total);

// for (let i = 0; i < queris.length; i++) {
//   let pertambahan = 0;
//   for (let j = 0; j < list.length; j++) {
//     if (queris[i] === list[j]) {
//       pertambahan += 1;
//     } else if (queris[i].includes("%")) {
//       let getQueries = "";
//       let getString = "";
//       if (queris[i].indexOf("%") === 0) {
//         getQueries = queris[i].slice(1);
//         getString = list[j].slice(list[j].length - getQueries.length);
//       } else if (queris[i].indexOf("%") === queris[i].length - 1) {
//         getQueries = queris[i].slice(0, queris[i].length - 1);
//         getString = list[j].slice(0, getQueries[i].length);
// }
// else if (
//   quesris[i].indexOf("%") === 0 &&
//   quesris[i].indexOf("%") === quesris[i].length - 1
// ) {
//   getQueries = quesris[i].slice(1, quesris[i].length - 1);
// }
//       if (getQueries === getString) {
//         pertambahan += 1;
//       }
//     }
//   }
//   total.push(pertambahan);
// }
// console.log(total);
