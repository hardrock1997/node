require("./tempModule")
// runs tempModule in a separate execution context
// and returns any funciton/(s) if did module.exports


function add(a,b) {
    return a+b
}

const ans=add(10,30);
console.log(ans)


// const {add10,add20 }= require("./myMathModule");

// const res=add10(10);
// console.log(res)
// const res2=add20(10);
// console.log(res2)

const importObj=require("./myMathModule");
const res1=importObj.add10(10);
const res2=importObj.add20(10);

console.log(res1,res2)

