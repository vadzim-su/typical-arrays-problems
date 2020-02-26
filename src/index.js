
exports.min = function min(array) {
  if (array !== undefined && array.length > 0) {
    array.sort(function (a, b) { return a - b; })
    return array[0];
  }
  else {
    return 0
  }
}

exports.max = function max(array) {
  if (array !== undefined && array.length > 0) {
    array.sort(function (a, b) { return a - b; })
    array = array.reverse('')
    return array[0];
  }
  else {
    return 0
  }

}

exports.avg = function avg(array) {
  if (array !== undefined && array.length > 0) {
    let result = array.reduce((sum, current) => sum + current, 0);
    return result / array.length
  }
  else {
    return 0
  }

}
