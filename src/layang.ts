for (let j = 0; j <= 5; j++) {
  for (let k = 0; k <= 5 - j; k++) {
    process.stdout.write(" ");
  }
  for (let l = 0; l <= j; l++) {
    process.stdout.write(" *");
  }
  console.log();
}
for (let j = 0; j <= 5; j++) {
  for (let k = j; k >= 0; k--) {
    process.stdout.write(" ");
  }
  for (let l = 5; l >= j; l--) {
    process.stdout.write(" *");
  }
  console.log();
}
