var myArr = [4,5,6,1,78, 9, 10, 19, 3, 11]; 

 var a = myArr;
for (var i = 1; i < a.length; i++) {
        var k = a[i];
        for (var j = i; j > 0 && k < a[j - 1]; j--){
            a[j] = a[j - 1];
        } 
        a[j] = k;
    }
console.log(myArr);