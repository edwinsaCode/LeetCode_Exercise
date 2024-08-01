let numss1 = [2,4]
let  numss2 = [1, 2, 3, 4];
let newNums=[]
for(let i =0; i<numss1.length; i++){
    let found=false
    let nextGreater=-1
    for(let j=0; j<numss2.length; j++){
        if(numss1[i]===numss2[j]){
            found=true
            continue
        }
       if(found && numss1[i]<numss2[j]){
        nextGreater=numss2[j]
        break
       }
    }
    newNums.push(nextGreater)
    console.log(nextGreater)
}
console.log(newNums)