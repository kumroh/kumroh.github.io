(function() {
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

    var singleA = mySingleton.getInstance();
    singleA.printNumber();
    var singleB = mySingleton.getInstance();
    singleB.printNumber();
    console.log('singleA & singleB are equal by reference? ', singleA === singleB);

    var str = "abccbdacn";
    var obj = {},
        flag;

    for (var i in str) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
        //flag = obj[str[i]] === 1 ? str[i] : NaN;
    }

    console.log(flag);

    console.log(obj);
    for (var key in obj) {
        if (obj[key] === 1) {
            console.log('first non repeating key is', key);
            return;
        }
    }
})();