var numbers = [1, 5, 4, 6, 7, 8, 22, 12, 9];
var nthLargestDualPosition = 3;
var dualCollection = [];

for (var i = 0, len = numbers.length; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
        dualCollection.push(numbers[i] + numbers[j]);
    }
}

dualCollection.sort(function(a, b) {
    return a - b;
});

console.log('nth(', nthLargestDualPosition, ') largest dual-sum is:', dualCollection[dualCollection.length - nthLargestDualPosition]);