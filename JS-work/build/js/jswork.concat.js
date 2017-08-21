
	/*! pack: jswork; version: 1.0.0;  
time: 2016-11-20; author: rkc via dark*/
(function() {
    CarManager = {
        requestInfo: function(model, customer) {
            console.log('Customer', customer, 'has requested info for', model);
        },
        buyVehicle: function(model, customer) {
            console.log('Customer', customer, 'has brought', model);
        },
        bookTestDrive: function(model, customer) {
            console.log('Customer', customer, 'has booked', model, 'for test drive');
        },
        execute: function(action) {
            this[action] && this[action].apply(null, [].slice.call(arguments, 1));
        }
    }
})();

CarManager.execute('requestInfo', 'Honda Amaze', 'Rohit Kumar Choudhary');
CarManager.execute('requestInfo', 'Audi Q3', 'Rohit Kumar');

CarManager.execute('bookTestDrive', 'Honda Amaze', 'Rohit Kumar');
CarManager.execute('bookTestDrive', 'Audi Q3', 'Rohit Kumar Choudhary');

CarManager.execute('buyVehicle', 'Audi Q3', 'Rohit Kumar Choudhary');

//--------------------------From dofactory----------------------------------------//

(function() {

    function add(x, y) {
        return x + y;
    }

    function sub(x, y) {
        return x - y;
    }

    function mul(x, y) {
        return x * y;
    }

    function div(x, y) {
        return x / y;
    }

    function Command(execute, undo, value) {
        this.execute = execute;
        this.undo = undo;
        this.value = value;
    }

    var AddCommand = function(value) {
        return new Command(add, sub, value);
    };

    var SubCommand = function(value) {
        return new Command(sub, add, value);
    };

    var MulCommand = function(value) {
        return new Command(mul, div, value);
    };

    var DivCommand = function(value) {
        return new Command(div, mul, value);
    }

    //-----------log-----------//
    var log = (function() {
        var log = "";

        return {
            add: function(msg) {
                log += msg + "\t";
            },
            show: function() {
                console.log('\n' + log);
                log = "";
            }
        }
    })();

    //-------------------//

    var Calculator = function() {
        var current = 0;
        var commands = [];

        function action(command) {
            var name = command.execute.toString().substr(9, 3);
            return name.charAt(0).toUpperCase() + name.slice(1);
        }

        return {
            execute: function(command) {
                current = command.execute(current, command.value);
                commands.push(command);
                log.add(action(command) + ": " + command.value);
            },
            undo: function() {
                var command = commands.pop();
                current = command.undo(current, command.value);
                log.add("Undo " + action(command) + ": " + command.value);
            },
            getCurrentValue: function() {
                return current;
            }
        }

    };

    function run() {
        var calculator = new Calculator();

        // issue commands

        calculator.execute(new AddCommand(100));
        calculator.execute(new SubCommand(80));
        calculator.execute(new MulCommand(3));
        calculator.execute(new DivCommand(4));

        log.add("\nValue: " + calculator.getCurrentValue());
        log.show();

        // reverse last two commands

        calculator.undo();
        calculator.undo();

        log.add("\nValue: " + calculator.getCurrentValue());
        log.show();
    }

    run();

})();;

(function() {

    function Car(model, miles) {
        this.model = model;
        this.miles = miles;
    }

    Car.prototype.getQuote = function() {
        return this.model + ' has completed ' + this.miles + ' miles.\n';
    }

    var ciaz = new Car('Honda Ciaz', 23009);
    var elentra = new Car('Elentra', 4009);

    console.log.apply(null, [ciaz.getQuote(), elentra.getQuote()]);


    /*-------------------------------------------------------------------------------------------------------- 
    -------------------->  enforce new in constructor pattern.  <---------------------------------------------   
    --------------------------------------------------------------------------------------------------------*/

    var Animal = (function() {
        function AnimalConstructor(type, age) {
            if (this instanceof AnimalConstructor === false) {
                return new AnimalConstructor(type, age);
            }

            this.familyType = type;
            this.age = age;
        }

        AnimalConstructor.prototype.getAnimal = function() {
            return this.familyType + ' has lived ' + this.age + ' years.\n';
        }

        return AnimalConstructor;
    })();

    var lion = new Animal('Moutain lion', 11);
    /** no need to worry of forgetting `new` **/
    var whale = Animal('Blue Whale', 9987);

    console.log.apply(null, [lion.getAnimal(), whale.getAnimal()]);
})();;

var Mortgage = function(name, amount) {
    this.name = name;
    this.amount = amount;
};

function Bank() {
    this.verify = function(name, amount) {
        return true; //-- after complex logic.
    }
};

function Background() {
    this.check = function(name) {
        return true; //-- after complex logic.
    }
};

function Credit() {
    this.get = function(name) {
        return false; //-- after complex logic.
    }
};

Mortgage.prototype.applyFor = function() {
    //-- check multiple sybstem for approval;

    var result = "verified and approved";

    if (!new Bank().verify(this.name, this.amount) ||
        !new Credit().get(this.name) ||
        !new Background().check(this.name)) {
        result = "verified and rejected";
    }

    console.log(this.name, 'has been', result, 'for', this.amount);
};

var mort = new Mortgage('Rohit Kumar', '$4560');
mort.applyFor(mort);;

function CarDoor(options) {
    this.color = options.color || 'red';
    this.material = options.material || 'steel';
    this.autoLock = options.autoLock || false;

    console.log('Car door created.....');
}

function CarSeat(options) {
    this.color = options.color || 'brown';
    this.material = options.material || 'leather';
    this.slider = options.slider || false;

    console.log('Car seat created');
}

function CarPartFactory() {}

CarPartFactory.prototype.createPart = function(options) {
    var _partClass;

    switch (options.partType) {
        case 'door':
            _partClass = CarDoor
            break;
        case 'seat':
            _partClass = CarSeat;
            break;
        default:
            _partClass = null;
            break;

    }

    return _partClass ? new _partClass(options) : _partClass;
}

//------------create parts -------------------------///
var partFactory = new CarPartFactory();

var door = partFactory.createPart({
    partType: 'door'
});
console.log(door);

var door1 = partFactory.createPart({
    partType: 'door',
    color: 'cyan',
    material: 'aluminium'
});
console.log(door1);

var seat = partFactory.createPart({
    partType: 'seat'
});
console.log(seat);;

 var myModule = (function() {
     var _temperature = 11;
     var _getTemp = function() {
         console.log("Today's temperature is: ", _temperature);
     };

     return {
         getTemp: _getTemp,
         increaseTemp: function(degree) {
             _temperature += (degree || 1);
         }
     }
 })();

 myModule.getTemp();
 console.log('increased by 20....');
 myModule.increaseTemp(20);
 myModule.getTemp();
 console.log('increased by 50....');
 myModule.increaseTemp(50);
 myModule.getTemp();



 /*
 -----------------------------------------------------------------------
 --------------- using shared sotrage (using this) ---------------------
 -----------------------------------------------------------------------
 */

 var AnotherModule = (function() {
     var accounts = [{
         name: 'Rohit',
         balance: 24000
     }];

     function aModule() {
         this.getAccDetails = function() {
             for (var a in accounts) {
                 console.log(accounts[a].name, 'has ruppes', accounts[a].balance);
             }
         }

         this.addAccDetail = function(obj) {
             accounts.push(obj);
         }
     }

     return aModule;
 })();

 var aModule = new AnotherModule();

 aModule.getAccDetails();
 aModule.addAccDetail({
     name: 'Arman',
     balance: 12000
 });
 aModule.getAccDetails();;

 var Subject = (function(undefined) {
     function TheSubject() {
         this._oList = [];
     }

     var subProto = TheSubject.prototype;
     subProto.observe = function(obj) {
         this._oList.push(obj);
         console.log('observer added');
     };

     subProto.unobserve = function(obj) {
         var idx = this._oList.indexOf(obj);
         if (idx > -1) {
             this._oList.splice(idx, 1);
             console.log('observer deleted');
         }

     };

     subProto.notify = function() {
         var args = Array.prototype.slice.call(arguments, 0);
         for (var i = 0; i < this._oList.length; i++) {
             this._oList[i]().update.apply(null, args);
         }
     };

     return TheSubject;
 })();

 //-------------------StockGrabber---------------------///

 function StockGrabber() {
     var subject = new Subject();

     this.addObserver = function(observer) {
         subject.observe(observer);
     };

     this.removeObserver = function(observer) {
         subject.unobserve(observer);
     };

     this.fetchStocks = function(stocks) {
         stocks = stocks || {
             Apple: "$120.12",
             IBM: "$110.80"
         };
         subject.notify(stocks);
     }
 }

 //-------------- create a few observers ----------------///

 var StockUpdater = function() {
         var data = 'stocks were updated.';

         return {
             update: function(results) {
                 console.log(data, results);
             }
         };
     },
     StockCharts = function() {
         var data = 'stocks sent to charts.';

         return {
             update: function(results) {
                 console.log(data, results);
             }
         };
     };

 //--------------main app-------------------------------///}

 var sGrabber = new StockGrabber();

 sGrabber.addObserver(StockUpdater);
 sGrabber.addObserver(StockCharts);
 sGrabber.fetchStocks();

 sGrabber.removeObserver(StockCharts);
 sGrabber.fetchStocks({samsung: "$199.11"});;

// In here everything is first defined local in closure scope, and then finally public api is exposed in the end.
var myRevealingModule = (function() {
    // private members
    var _agingCounter = 189,
        _getAging = function() {
            console.log('current aging is:', _agingCounter);
        },
        _performAging = function() {
            ++_agingCounter;
        }

    //priviledged member- can be used inside module and from outside using
    //public members

    function performPublicAging() {
        _performAging();
    }

    function getPublicAging() {
        _getAging();
    }

    // public member
    function reversePublicAging() {
        --_agingCounter;
    }


    // return as public members
    return {
        triggerAging: performPublicAging,
        knowAging: getPublicAging,
        goYounger: reversePublicAging
    }

})();

myRevealingModule.knowAging();

myRevealingModule.triggerAging();
myRevealingModule.knowAging()

myRevealingModule.goYounger();
myRevealingModule.knowAging();

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