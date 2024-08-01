import { readFileSync } from "fs";
let data = readFileSync("./src/soalselingan.txt", "utf-8");
let enter = data.split("\n");
let kum = [];
for (let a = 0; a < enter.length; a++) {
  let kolom = enter[a].split(" ");
  let doubelelement = [];
  for (let b = 0; b < kolom.length; b++) {
    let nu = parseInt(kolom[b]);
    doubelelement.push(nu);
  }
  kum.push(doubelelement);
}
// console.log(kum);

// jumlah tertinggi vertikal
let leng = kum.length;
let diagonal = 0;
let vertikal = 1;
let highesvertikal = 0;
for (let z = 0; z < leng; z++) {
  let dalam = kum[z];
  for (let a = 0; a < dalam.length; a++) {
    // for(let b=a;)
    diagonal++;
    vertikal *= dalam[a];
    if (diagonal === 4) {
      if (highesvertikal === 0) {
        highesvertikal = vertikal;
      } else if (vertikal > highesvertikal) {
        highesvertikal = vertikal;
      }

      diagonal = 0;
      vertikal = 1;
    }
  }
  console.log("vertikal:", highesvertikal);
  console.log("===");
}

// jumlah tertinggi horizontal
let leng2 = kum.length;
let batasHorizontal = 0;
let horizontal = 1;
let higeshorizintal = 0;
for (let z = 0; z < leng2; z++) {
  let dalam = kum[z];
  for (let a = 0; a < dalam.length; a++) {
    // for(let b=a;)
    batasHorizontal++;
    horizontal *= dalam[a];
    if (batasHorizontal === 4) {
      if (higeshorizintal === 0) {
        higeshorizintal = horizontal;
      } else if (horizontal > higeshorizintal) {
        higeshorizintal = horizontal;
      }

      batasHorizontal = 0;
      horizontal = 1;
    }
  }
  console.log("horizontal:", higeshorizintal);
  console.log("===");
}

// diagonal dari kiri ke kanan
let leftToRightSum = 0;
let batasdiagonal = 0;
let higesdiagonal = 0;
for (let i = 0; i < kum.length; i++) {
  batasdiagonal++;
  leftToRightSum += kum[i][i];
  if (batasdiagonal === 4) {
    if (higesdiagonal === 0) {
      higesdiagonal = leftToRightSum;
    } else if (leftToRightSum > higesdiagonal) {
      higesdiagonal = leftToRightSum;
    }

    console.log(leftToRightSum);
    batasdiagonal = 0;
    leftToRightSum = 0;
  }
}
console.log("hightes Diagonal Kanan=", higesdiagonal);

// diagonal dari kanan ke kiri
let n: number = kum.length;
let rightToLeft = 0;
let batasdiagonalKiri = 0;
let higesdiagonalKiri = 0;

for (let j = 0; j < n; j++) {
  batasdiagonalKiri++;
  rightToLeft += kum[j][n - j - 1];
  if (batasdiagonalKiri === 4) {
    if (higesdiagonalKiri === 0) {
      higesdiagonalKiri = rightToLeft;
    } else if (rightToLeft > higesdiagonalKiri) {
      higesdiagonalKiri = rightToLeft;
    }

    console.log(rightToLeft);
    batasdiagonalKiri = 0;
    rightToLeft = 0;
  }
}
console.log("hightes Diagonal Kiri=", higesdiagonalKiri);

// 