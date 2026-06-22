//ReverseString

function toReverseString(toBeReverse){

const characterArray = toBeReverse.split("");
let reveresedString = ""
for (let x = characterArray.length-1; x>=0 ; x--){
    reveresedString= reveresedString+characterArray[x]
}
console.log("Reversed String is "+reveresedString);
if (toBeReverse===reveresedString) {
    console.log("The String " +toBeReverse +" is a palindrome");    
} else {
    console.log("The String " +toBeReverse +" is not a palindrome");
}
}
toReverseString("malayalam")
