Array.prototype.myForEach = function (func) {
    array = this;
    for (let i = 0; i < this.length; i++) {
        let value = this[i];
        func(value, i, this)
    }
};

[5, 6, 5, 2, 4, 7, 'sdfg',].myForEach(function (item, i, arr) {

});

Array.prototype.myMap = function (func) {
    array = this;
    let NewArray;
    for (let i = 0; i < this.length; i++) {
        let value = this[i];
        NewArray[i] = func(value, i, this)
    }
    return array
};

console.log([65, 8, 2, 4, 1, 7, 456, 852, 'sdrthk'].myMap(function (item) {
    item *= 2;
    return item
}));

Array.prototype.mySort = function (func) {
    array = this;
    let temp;
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < (this.length - i - 1); j++) {
            if (this[j] > this[j + 1]) {
                temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;

            }
        }
    }
    return array;
};

console.log([65, 8, 2, 4, 1, 7, 456, 852, 'sdrthk'].mySort(function (item) {}));

Array.prototype.myFilter = function