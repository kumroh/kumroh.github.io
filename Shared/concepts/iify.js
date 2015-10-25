var buildProperty = (function() {
    var _keys = {};

    return function(key) {
        if (!_keys.hasOwnProperty(key)) {

            Object.defineProperty(this, key, {
                get: function() {
                    return _keys[key] * 234;
                },
                set: function(val) {
                    _keys[key] = val;
                }
            });
        }
    }
})();

var dbObject = {
    setProp: buildProperty
};

var obj = {
    a: 100,
    b: 200,
    c: 300
};
for (var o in obj) {
    dbObject.setProp(o);
    dbObject[o] = obj[o];
}

for (var o in obj) {
    console.log(dbObject[o]);
}