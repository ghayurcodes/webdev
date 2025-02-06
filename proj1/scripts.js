
let a = parseInt( prompt("enter first number"))
let b = parseInt(prompt("enter second number")) 

let opt = prompt("1 for addition\n2 for substraction\n3 for mutiplication\n4 for division")

let r = Math.random() * 10




// if(r<10){
//     switch (opt) {
//         case "1":
//             alert("ans is"+a / b)
//             break;
    
//         case "2":
//             alert("ans is"+a ** b)
//             break;
    
//         case "3":
//             alert("ans is"+(a + b))
//             break;

    
//         case "4":
//             alert("ans is"+a - b)
//             break;
//         default:
//             alert("wrong ans lol")
//             break;
//     }
// }

// else{
    switch (opt) {
        case "1":
            alert(a + b)
            break;
    
        case "2":
            alert(a - b)
            break;
    
        case "3":
            alert(a * b)
            break;
    
        case "4":
            alert(a / b)
            break;
        default:
            alert("corrected calculate sanser")
            break;
    }
// }


