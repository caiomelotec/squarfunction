function squareSum(numbers) {
    let s = 0;
    for (var i = 0; i < numbers.length; i++) {
        s = s + Math.pow(numbers[i], 2);
    }
    return s
}

console.log(squareSum([1, 2, 2]))
console.log(squareSum([5, 2, 2]))