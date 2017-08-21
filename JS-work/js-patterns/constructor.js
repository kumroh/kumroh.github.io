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
})();