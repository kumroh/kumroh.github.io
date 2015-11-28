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

})();