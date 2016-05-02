

/*** HeapSort *****/

var _heapSort = (function() {
    function heapify(myArray, index, heapSize) {
        var _left = (2 * index) + 1,
            _right = (2 * index) + 2,
            largest = index;

        if (_left < heapSize && myArray[_left] > myArray[largest]) {
            largest = _left;
        }
        if (_right < heapSize && myArray[_right] > myArray[largest]) {
            largest = _right;
        }

        if (largest !== index) {
            tmp = myArray[largest];
            myArray[largest] = myArray[index];
            myArray[index] = tmp;

            heapify(myArray, largest, heapSize);
        }

    }

    function maxHeapify(myArray) {
        for (var i = Math.floor(myArray.length / 2); i >= 0; i--) {
            heapify(myArray, i, myArray.length);
        }
    }

    function hSort(myArray) {
        var _size = myArray.length,
            tmp;
        //-----
        maxHeapify(myArray);
        //-----
        for (var i = myArray.length - 1; i > 0; i--) {
            tmp = myArray[0];
            myArray[0] = myArray[i];
            myArray[i] = tmp;

            heapify(myArray, 0, --_size);
        }
        return myArray;
    }

    return hSort;
})();

var _myArr = _heapSort([23, 1, 4, 97, 73, 5, 3, 9, 0, 19]);
console.log(_myArr);