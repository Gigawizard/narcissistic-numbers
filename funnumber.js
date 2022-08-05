function narcissistic(value) {
    let num = value.toString().split("");
    let sum = 0
    let power = num.length
    for(i = 0; i < power; i++){
        sum += parseInt(Math.pow(num[i],power))
    }
    return sum == value;
}

let numbersfound = 0
let numbers = []
let tries = 0
while(numbersfound < 20){
    tries += 1
    if(narcissistic(tries)){
        numbers.push(tries)
        numbersfound += 1;
    }
}
console.log("this took " + tries + " numbers, the numbers are")
console.log(numbers)