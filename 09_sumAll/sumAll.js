const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }
  if (min < 0 || max < 0) {
    return "ERROR";
  }

  if (min > max) {
    // anggap seperti memindah 2 botol misal air dan teh
    const temp = min;
    min = max;
    max = temp;
  }
  let result = 0;
  // mySolution
  // if (Number.isInteger(min) && Number.isInteger(max)) {
  //   for (let i = min; i <= max; i++) {
  //     result += i;
  //   }
  //   return result;
  // } else {
  //   return "ERROR";
  // }
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

console.log(sumAll(3, 1));

// Do not edit below this line
module.exports = sumAll;
