let harga = [7,1,5,3,6,4];
let hargaMinimal = 100; 
let keuntunganMax = 0; 

for (let i = 0; i < harga.length; i++) {
  if (harga[i] < hargaMinimal) {
    hargaMinimal = harga[i];
    console.log(hargaMinimal)
  } else if (harga[i] - hargaMinimal > keuntunganMax) {
    keuntunganMax = harga[i] - hargaMinimal;
  }
}
console.log(hargaMinimal,keuntunganMax)