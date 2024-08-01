// let ar = [4, 2, 3, 0, 3, 1, 2, 6, 3];
let ar = [4, 2, 3, 0, 3, 1, 2];
// let ar = [3, 0, 2, 1, 2, 6];
let start = 0;
let tam = [];
let visited: boolean[] = new Array(ar.length).fill(false);
// let found = false;

// for (let i = 0; i < ar.length; i++) {
//   if (!visited[i]) {
//     visited[i] = true;
//   }
//   if (ar[i] === 0) {
//     found = true;
//     console.log("Output: true", found);
//   }

//   let loncatDepan = i + ar[i];
//   let loncatBelakang = i - ar[i];
//   if (loncatDepan >= 0 && loncatDepan < ar.length) {
//     tam.push(loncatDepan);
//   }
//   if (loncatBelakang >= 0 && loncatBelakang < ar.length) {
//     tam.push(loncatBelakang);
//     // console.log(tam);
//   }
// }
// if (!found) {
//   console.log("Output: false", found);
// }

// const visited: boolean[] = new Array(ar.length).fill(false);
const stack: number[] = [start];

let found = false;
for (let i = 0; stack.length > 0 && !found; i = stack.pop()!) {
  console.log(i);
  if (!visited[i]) {
    visited[i] = true;

    if (ar[i] === 0) {
      found = true;
      console.log("Output: true");
    }

    const jumpForward = i + ar[i];
    const jumpBackward = i - ar[i];

    if (jumpForward >= 0 && jumpForward < ar.length) {
      stack.push(jumpForward);
      //   console.log(jumpForward, "*");
    }

    if (jumpBackward >= 0 && jumpBackward < ar.length) {
      stack.push(jumpBackward);
      //   console.log(jumpBackward, "--");
    }
  }
}
console.log(stack);
if (!found) {
  console.log("Output: false");
}
