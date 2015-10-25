var mySingleton = (function() {
    var instance;

    function init() {
        var myNum = Math.random();

        function getNumber() {
            console.log(myNum);
        }

        return {
            printNumber: getNumber
        }
    }


    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

var singleA = 	mySingleton.getInstance();
singleA.printNumber();
var singleB = 	mySingleton.getInstance();
singleB.printNumber();
console.log('singleA & singleB are equal by reference? ', singleA === singleB);