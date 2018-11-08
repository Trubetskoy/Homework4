Array.prototype.myForEach = function (func) {
    array = this;
    for (var i = 0; i < array.length ; i++) {
        var val = array[i];
        func( val, i, array)
    }
};

[5, 6, 5, 2, 4, 7 ,'sdfg',].myForEach(function (item, i, arr) {

});

Array.prototype.myMap = function (func) {
    array = this;
       for (var i = 0; i < array.length ; i++) {
        var val = array[i];
        array[i] = func(val, i, array)
    }
    return array
};

console.log([65, 8, 2, 4, 1, 7, 456, 852, 'sdrthk'].myMap(function (item) {
    item*=2;
    return item
  }));