let ring = [2, 2, 1];
let jomblo: number[] = [];
if (ring.length === 1) {
  console.log(ring[0]);
}
for (let i = 0; i < ring.length; i++) {
  let right = false;
  for (let j = 0; j < ring.length; j++) {
    if (ring[i] === ring[j] && i !== j) {
      right = true;
      break;
    }
  }
  if (!right) {
    console.log(ring[i]);
  }
}
