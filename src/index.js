exports.min = function min(array) {
    if (!Array.isArray(array)) {
        return 0;
    }
    if (array.length < 1) {
        return 0;
    }

    let minValue = array[0];
    array.forEach(element => {
        if (element < minValue) {
            minValue = element;
        }
    });
    return minValue;
};
// min([1, 3, -5, 7, 0]); // -5


exports.max = function min(array) {
    if (!Array.isArray(array)) {
        return 0;
    }
    if (array.length < 1) {
        return 0;
    }

    let maxValue = array[0];
    array.forEach(element => {
        if (element > maxValue) {
            maxValue = element;
        }
    });
    return maxValue;
};
// max([1, 3, -5, 7, 0]); // 7


exports.avg = function min(array) {
    if (!Array.isArray(array)) {
        return 0;
    }
    if (array.length < 1) {
        return 0;
    }

    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum / array.length;
};
// avg([1, 2, 3, 4]); // 2.5
