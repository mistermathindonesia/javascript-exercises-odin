const convertToCelsius = function (deg) {
  const result = ((5 * (deg - 32)) / 9).toFixed(1);
  return parseFloat(result);
};

console.log(convertToCelsius(100));

const convertToFahrenheit = function (deg) {
  const result = ((9 * deg) / 5 + 32).toFixed(1);
  return parseFloat(result);
};
console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
