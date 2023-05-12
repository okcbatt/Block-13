// Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";


function getBoolean(value){
    if(value === false){
        return "The boolean value false is falsy"
    } else if(value === null){
        return "The null value is falsy"
    } else if(value === undefined){
        return "undefined is falsy"
    } else if(value === 0){
        return  "The number 0 is falsy (the only falsy number)"
    } else if(value === ""){
        return "The empty string is falsy (the only falsy string)"
    } else {
        return true
    }
}

// console.log(getBoolean("I am a string"))
// console.log(getBoolean(false))
// console.log(getBoolean(null))
// console.log(getBoolean(undefined))
// console.log(getBoolean(0))
// console.log(getBoolean(""))

// Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

function getSum(num1, num2){
    let sum = num1+num2
    if(sum < -1000){
        return `${sum} is less than -1000`
    } else if(sum < 0 && sum >= -1000){
        return `${sum} is a negative number`
    } else if(sum === 0){
        return `${sum} is equal to 0`
    } else if(sum > 0 && sum < 100){
        return `${sum} is larger than 0`
    } else{
        return `${sum} is greater than 100`
    }
}

// console.log(getSum(50,51))
// console.log(getSum(99,-2))
// console.log(getSum(0,101))
// console.log(getSum(500,-500))
// console.log(getSum(-1000,0))
// console.log(getSum(-5,0))

// Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

function greaterThan(num1, num2){
    if(num1 >= 5 && num2 >=5){
        return true
    } else{
        return false
    }
}

// console.log(greaterThan(5,6))
// console.log(greaterThan(10,11))
// console.log(greaterThan(0,0))
// console.log(greaterThan(1000,-1000))
// console.log(greaterThan(6,4))
// console.log(greaterThan(5,5))

// Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

function compare(param1A, param1B, param2A, param2B){
    if(param1A===param1B || param2A===param2B){
        return true
    } else {
        return false
    }
}

console.log(compare("cat", "cat", 6, "6"))
console.log(compare("five", 5, "dog", "dawg"))
console.log(compare(0, false, "horse", "horse"))
console.log(compare("eight", "eight", "ate", "ate"))
console.log(compare(11, "eleven", "four", "for"))
console.log(compare("cake", "cake", "pie", "pie"))