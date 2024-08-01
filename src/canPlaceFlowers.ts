// let flowerbed = [1, 0, 0, 0, 1];
// let nn = 2;
// let hitung = 0;

// for (let i = 0; i < flowerbed.length; i++) {
//   if (
//     flowerbed[i] === 0 &&
//     (i === 0 || flowerbed[i - 1] === 0) &&
//     flowerbed[i + 1] === 0
//   ) {
//     flowerbed[i] = 1;
//     hitung++;
//   }
// }
// if (hitung >= nn) {
//   console.log(hitung, "true");
// } else {
//   console.log(hitung, "false");
// }

// Happy Number

let NN=2;
let pangkat=0
let string=String(NN)

// for(let i=0; i<string.length; i++){
//     pangkat += +string[i]  * +string[i]
//     // console.log(pangkat,pangkat2, string)
//     if(pangkat>1){
//         for(let j=0; j< String(pangkat).length; j++){
//             pangkat = +String(pangkat)[j] * +String(pangkat)[j];
//         }
//     }
//     string= String(pangkat)
    
// }
// if(pangkat===1){
//     console.log(pangkat,"true")
// }else{
//     console.log(pangkat,"false")
// }

function isHappy(n:number){
    let previousResult: number[]=[]
    let latestResult: number=n
    let stringVersion:string
    while(latestResult !== 1){
        let newResult=0
        let question=''
        stringVersion=latestResult.toString()
        for(let i=0; i<stringVersion.length; i++){
            newResult +=parseInt(stringVersion[i])*parseInt(stringVersion[i])
            question += `${stringVersion[i]}^2+`
        }
        console.log(question + '=' +newResult)
        if(previousResult.includes(newResult))return false
        previousResult.push(newResult)
        latestResult=newResult
    }
    return latestResult ===1
}
console.log(isHappy(3))