console.log("hello Ghayur");  // Logs greeting

// let a = document.querySelectorAll(".box");
// console.log(a);      





// for (let i = 0; i <= 4; i++) {
//     a[i].style.backgroundColor="yellow"
//     a[i].innerHTML="<p>hello</p>"
//       a[i].style.color="black"
    
// }
 

// console.log( a[3].textContent)
    

// let div=document.createElement("p")
// div.innerHTML="hello from <b>hgqhqhj</b>js"
// div.setAttribute("class","lol");
// a[3].append(div)

// document.querySelector(".lol").style.color="red"












document.querySelector(".box").addEventListener("click",()=>{
    // btn.style.backgroundColor=(btn.style.backgroundColor=="white"?"green":"white")
    alert("box clicked")
})


let btn= document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
    e.stopPropagation()
    // btn.style.backgroundColor=(btn.style.backgroundColor=="white"?"green":"white")
    alert("button clicked")
})


let s=setInterval(() => {
    btn.style.backgroundColor=(btn.style.backgroundColor=="green"?"red":"green")
   
}, 2000);


