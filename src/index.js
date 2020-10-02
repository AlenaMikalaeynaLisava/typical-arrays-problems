exports.min = function min(array) {
    if (Array.isArray(array)) {
        if (array.length !== 0) {
            let variable = +array[0];
            array.forEach((element) => {
                if (Number.isInteger(element) && +variable >= +element) {
                    variable = element;
                }
            });
            return variable;
        } else return 0;
    } else return 0;
};

exports.max = function max(array) {
    if (Array.isArray(array)) {
        if (array.length !== 0) {
            let variable = +array[0];
            array.forEach((element) => {
                if (+variable <= +element) {
                    variable = element;
                }
            });
            return variable;
        } else return 0;
    } else return 0;
};

exports.avg = function avg(array) {
    if (Array.isArray(array)) {
        if (array.length !== 0) {
            let sum = 0;
            array.forEach((element) => {
                sum += +element;
            });
            return sum / array.length;
        } else return 0;
    } else return 0;
};
