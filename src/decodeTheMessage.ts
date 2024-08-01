function decodeMessage(key: string, message: string): string {
  let abjad = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let keyArr = [];
  for (let i = 0; i < key.length; i++) {
    if (key[i] !== " ") {
      let exists = false;
      for (let j = 0; j < keyArr.length; j++) {
        if (keyArr[j] === key[i]) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        keyArr.push(key[i]);
      }
    }
  }
  console.log(keyArr);
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let ch = message[i];
    if (ch === " ") {
      result += " ";
    } else {
      for (let j = 0; j < keyArr.length; j++) {
        if (keyArr[j] === ch) {
          result += abjad[j];
          break;
        }
      }
    }
  }
  return result;
}

let key = "the quick brown fox jumps over the lazy dog";
let message = "vkbs bs t suepuv";
console.log(decodeMessage(key, message));
