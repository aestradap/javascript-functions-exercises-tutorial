// Your code goes here
const rapid = (text) => {
   
    let newString = text.toLowerCase();
    for(let i = 0; i < newString.length; i++){
        if(newString.charAt(i) === "a" ||
        newString.charAt(i) === "e" || 
        newString.charAt(i) === "i" ||
        newString.charAt(i) === "o" ||
        newString.charAt(i) === "u") 

        newString = newString.replace(newString.charAt(i), '');
    }
    
    return newString.toUpperCase();
};


// Work above this line; do not change code below
let str = "john";
console.log(rapid(str));
