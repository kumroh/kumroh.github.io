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
 sGrabber.fetchStocks({samsung: "$199.11"});