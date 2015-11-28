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
mort.applyFor(mort);