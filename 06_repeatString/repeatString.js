const repeatString = function (str, num) {
  let result = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      result += str;
    }
  } else {
    console.log("ERROR. Number must be greater than 0");
  }
  return result;
};

console.log(repeatString("iya", 3));
// Do not edit below this line
module.exports = repeatString;
