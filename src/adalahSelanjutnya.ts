let s1 = "abc";
let t1 = "ahbgdc";
let simpanA=0;
let simpanB=0;

// for(let i=0; i<t1.length; i++){
//     for(let j=0; j<s1.length; j++){
//         if(t1[i]===s1[j]){
//             simpanA++
//             simpanB++

//         }else{
//             simpanB++
//         }
//     }
// }
while (simpanB < s1.length && simpanA < t1.length) {
  if (s1[simpanB] === t1[simpanA]) {
    simpanA++;
    simpanB++;
  } else {
    simpanA++;
  }
}
// return simpanB === s.length;
if (simpanB===s1.length){
    console.log("true")
}else{
    console.log("false")
}