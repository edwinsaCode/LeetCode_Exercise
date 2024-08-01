let haystack = "apakah";
let needle = "aka";

if (needle.length <= haystack.length) {
  let hasil = -1;

  for (let i = 0; i < haystack.length - needle.length; i++) {
    let hasil2 = "";

    for (let j = i; j < i + needle.length; j++) {
      hasil2 += haystack[j];
    }
    if (hasil2 === needle) {
      hasil = i;
      break;
    }
  }
  console.log(hasil);
} else {
  console.log(-1);
}

// if (!haystack || !needle) {
//  let hasil2 = -1;
// }

// let idx = 0;
// let needlepoin = 0;
// while (idx < haystack.length) {
//   let haystackletter = haystack[idx + needlepoin];
//   let needleletter = needle[needlepoin];
//   if (!needleletter) {
//     hasil = idx;
//   }
//   if (haystackletter === needleletter) {
//     needlepoin++;
//   } else {
//     idx++;
//     needlepoin = 0;
//   }
// }
// console.log(hasil);
//  if (!haystack || !needle) return -1;
//  let pointer = 0;
//  let needLePointer = 0;
//  while (pointer < haystack.length) {
//    const currentHayStackLetter = haystack[pointer + needLePointer];
//    const currentNeedleLetter = needle[needLePointer];
//    if (!currentNeedleLetter) return pointer;
//    if (currentHayStackLetter === currentNeedleLetter) {
//      needLePointer++;
//    } else {
//      pointer++;
//      needLePointer = 0;
//    }
//  }
//  return -1;
