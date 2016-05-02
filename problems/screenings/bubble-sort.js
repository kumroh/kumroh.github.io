// bubble sort

var inputArray = [23, 1, 4, 89, 10, 19, 7,99]; 
for (var i = 0; i < inputArray.length - 1; i++) {
    for (var j = 0; j < inputArray.length - i - 1; j++) {
        if (inputArray[j] > inputArray[j + 1]) {
            var tmp = inputArray[j];
            inputArray[j] = inputArray[j+1];
            inputArray[j+1] = tmp;
        }
    }
}

console.log(inputArray);