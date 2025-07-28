const fs=require("fs")

console.log("starting")
fs.readFile("tetx.txt",(e,d)=>{
   
    if(e){
        console.log(e)
    }
    else{
        console.log(d.toString())
    }
})
console.log("ending")