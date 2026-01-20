const removeFromArray = function (arr, ...removeItem) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(removeItem);
    if (!removeItem.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(removeFromArray([1, 2, 3, 4, 1, 5, 4], 1, "a"));

// Do not edit below this line
module.exports = removeFromArray;
