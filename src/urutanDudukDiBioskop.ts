let peluang1 = 0;
let elements: string[] = ["A", "B", "C", "D", "F", "G"];
let faktorial: Array<Array<string>> = [];
let arra = [];

let faktor = (no: number) => {
  let result = no;
  for (let i = no - 1; i >= 1; i--) {
    result *= i;
  }
  return result;
};
// console.log(faktor(6))

// function isValid(arr: string[]): boolean {
//   if (Math.abs(arr.indexOf("C") - arr.indexOf("D")) !== 1) return false;
//   if (Math.abs(arr.indexOf("A") - arr.indexOf("B")) === 1) return false;
//   if (arr[0] !== "E") return false;
//   if (Math.abs(arr.indexOf("F") - arr.indexOf("E")) === 1) return false;
//   return true;
// }

let trueValue = (arr: string[], value: string, expectedValue: string) => {
  let status = false;
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      if (i === arr.length - 1) {
        if (arr[i - 1] === expectedValue) {
          status = true;
          break;
        }
      } else {
        if (arr[i - 1] === expectedValue || arr[i + 1] === expectedValue) {
          status = true;
          break;
        }
      }
    }
  }
  return status;
};

let wrongValue = (arr: string[], value: string, expectedValue: string) => {
  let status = false;
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      if (i === arr.length - 1) {
        if (arr[i - 1] !== expectedValue) {
          status = true;
          break;
        }
      } else {
        if (arr[i - 1] !== expectedValue && arr[i + 1] !== expectedValue) {
          status = true;
          break;
        }
      }
    }
  }
  return status;
};
for (let i = 0; i < 6 * 5 * 4 * 3 * 2 * 1; i++) {
  let indexOfElement = [0, 1, 2, 3, 4, 5];
  let permutation = [];
  let pembagi = 1;
  for (let j = 0; j < elements.length; j++) {
    let index = Math.trunc(i / pembagi) % indexOfElement.length;
    permutation.push(elements[indexOfElement[index]]);
    indexOfElement.splice(index, 1);
    pembagi *= j + 1;
    // console.log(index)
  }
  permutation.unshift("E");
  if (trueValue(permutation, "C", "D") && trueValue(permutation, "D", "C")) {
    if (
      wrongValue(permutation, "A", "B") &&
      wrongValue(permutation, "F", "E")
    ) {
      faktorial.push(permutation);
    }
  }
}
console.dir(faktorial, { maxArrayLength: 5 });
console.log(faktorial, faktorial.length);
