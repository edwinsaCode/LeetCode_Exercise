// function Cek(str1: string[], str2: string[]): string[] {
//   let tampung: string[] = [];
//   for (let a = 0; a < str1.length; a++) {
//     for (let b = 0; b < str2.length; b++) {
//       tampung.push(str1[a].concat(str2[b]));
//     }
//   }
//   return tampung;
// }

function LetterCombination(digit: string): string[] {
  let obj: any = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let final: string[] = [];
  function Manipulate(newKey: string[], oldKey: string[]): string[] {
    const result = [];
    if (oldKey.length === 0) return newKey;
    for (let i = 0; i < oldKey.length; i++) {
      for (let j = 0; j < newKey.length; j++) {
        result.push(oldKey[i] + newKey[j]);
      }
    }
    return result;
  }
  for (let x = 0; x < digit.length; x++) {
    final = Manipulate(obj[digit[x]], final);
  }
  return final;
}
const soal = "234";
console.log(LetterCombination(soal));
