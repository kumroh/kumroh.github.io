// selection sort

var inputArray = [23, 1, 4, 89, 10, 19, 7];
var iMin;
for (var i = 0; i < inputArray.length - 1; i++) {
    iMin = i;
    for (var j = i + 1; j < inputArray.length; j++) {
        if (inputArray[j] < inputArray[iMin]) {
            iMin = j;
        }
    }

    var tmp = inputArray[iMin];
    inputArray[iMin] = inputArray[i];
    inputArray[i] = tmp;
}	

console.log(inputArray.join());