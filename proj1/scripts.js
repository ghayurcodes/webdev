function fac(num) {
    if (num === 0 || num === 1) {
        return 1;  // Base case: factorial of 0 or 1 is 1
    }
    return num * fac(num - 1);  // Recursive call
}

var num = 5;
console.log(fac(num)); // Output: 120
