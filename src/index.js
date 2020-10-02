
exports.min = function min (array) {
      let variable = array[0];
  array.forEach((element) => {
    if (variable < element) {
      variable = element;
    }
  });
  return variable;
}

exports.max = function max (array) {
      let variable = array[0];
  array.forEach((element) => {
    if (variable > element) {
      variable = element;
    }
  });
  return variable;
}

exports.avg = function avg (array) {
      let sum = 0;
      array.forEach((element) => {
        sum += element;
      });
      return sum / array.length;
}
