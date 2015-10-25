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
 aModule.getAccDetails();