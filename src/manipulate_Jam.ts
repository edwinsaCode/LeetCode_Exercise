let clock = "12:00:00 pm";
// ambil am/pm
let ampm = clock.slice(9);
// ambil jam
let jam = clock.slice(0, 2);
// konversi string ke number
let jamNumber = parseInt(jam);
// jika pm dan tidak 12: tambahkan 12
if (ampm === "pm" && jamNumber !== 12) {
  jamNumber += 12;
} else if (ampm === "am" && jamNumber === 12) {
  jamNumber -= 12;
}
console.log(
  (jamNumber < 10 ? "0" : "") + jamNumber.toString() + clock.slice(2, 8)
);
