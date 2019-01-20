Array.prototype.myForEach = function (func) {
    array = this;
    for (let i = 0; i < this.length; i++) {
        let value = this[i];
        func(value, i, this)
    }
};

Array.prototype.myMap = function (func) {
    let array = Object.assign([], this);
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        array[i] = func(item, i, array)
    }
    return array
};

console.log([65, 8, 2, 4, 1, 7, 456, 852, 'sdrthk'].myMap(function (item) {
    item *= 2;
    return item
}));


Array.prototype.mySort = function (func) {
    let array = this;
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
          if (func && func(array[j], array[j + 1]) > 0) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
          else if (!func && array[j].toString()>array[j+1].toString()){
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
      }
    }   
    return array;
};

console.log([65, 8, 2, 4, 1, 7, 456, 852, 'sdrthk'].mySort(function (item) {
}));

Array.prototype.myFilter = function (func) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array
};
console.log([65, 8, 2, 4, 1, 7, 456, 852, 'sdrthk'].myFilter(function (item) {
    if (item > 8) {
        return true
    }
}));