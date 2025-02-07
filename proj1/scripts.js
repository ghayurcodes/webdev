var a = {
    1: "sparky",
    2: "cool",
    3: "funky"
};

var b = {
    1: "shoes",
    2: "clothes",
    3: "cars"
};

var c = {
    1: "limited",
    2: "copyeright",
    3: "group"
};

// Generate a random number between 1 and 3
var r = Math.floor(Math.random() * 4);

// Construct the name
var output = a[r] + " " + b[r] + " " + c[r];

console.log(output);
