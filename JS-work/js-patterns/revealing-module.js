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
myRevealingModule.knowAging()