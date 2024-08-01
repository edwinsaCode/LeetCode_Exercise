function Catur(
  posisiKudaAnda: [number, number],
  posisiKudaLawan: [number, number]
): string {
  const [x1, y1] = posisiKudaAnda;
  const [x2, y2] = posisiKudaLawan;
  const langkah: [number, number][] = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  for (let i = 0; i < langkah.length; i++) {
    let dx = langkah[i][0];
    let dy = langkah[i][1];
    if (x1 + dx === x2 && y1 + dy === y2) {
      return "menang";
    }
  }
  return "kalah";
}

console.log(Catur([8, 5], [7, 3]));
console.log(Catur([1, 1], [3, 3]));
