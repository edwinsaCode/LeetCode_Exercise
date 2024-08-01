let day=50
let firstt =1
for(let i=2; i<=day;i++){
    if(i%3===0){
        firstt=Math.floor(firstt/2)
    }else{
       firstt= firstt *3
    }
}
console.log(firstt)