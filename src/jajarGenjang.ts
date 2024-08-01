for (let j = 0; j < 4; j++) {
  for (let k = 5; k > j; k -= 1) {
    process.stdout.write(" ");
  }
  for (let l = 5; l > 0; l--) {
    process.stdout.write(" *");
  }
  console.log();
}
