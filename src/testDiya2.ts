let S = "0 - 22 1985--324";
let digitOnly = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let noTelpon=""
let param=0

for(let i=0; i<S.length; i++){
    if (S[i] >= "0" && S[i] <= "9") {
              noTelpon += S[i];
              param++;
    } 
    // let gabungDigitTerakhir=noTelpon.slice(-param)
    // noTelpon=noTelpon.slice(0, -param)+"-"+gabungDigitTerakhir
    if (param===3){
        noTelpon +="-"
        param=0
    }
}
// for(let i=0; i<noTelpon.length; i++){
//     if()
// }
console.log(noTelpon)
