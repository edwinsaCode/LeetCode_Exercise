let nu = [0, 1, 0, 1, 3, 12];

for (let i = 0; i < nu.length; i++) {
  for (let j = i + 1; j < nu.length; j++) {
    if (nu[i] === 0) {
      let posisi = nu[i];
      nu[i] = nu[j];
      nu[j] = posisi;
    }
  }
}
console.log(nu);
