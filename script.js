
function firstLetterName(name) {
    var firstLetter = name.charAt(0);
    alert("The name " + name + " starts with the letter " + firstLetter);
}

function divisibleByTwo(number) {
    return number % 2 === 0;
}

function largestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

firstLetterName("John");
console.log(divisibleByTwo(10)); // should return true
console.log(divisibleByTwo(7)); // should return false
console.log(largestNum([10, 5, 20, 3])); // should return 20
