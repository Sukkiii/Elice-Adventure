// function sortStringArray(array1) {
//  var sort = array1.sort();
//  return sort;
// }

// function reverseStringArray(array) {
//   return array.sort().reverse();
// }

function reverseStringArray (array1) {
  let reverseSort = array1.sort(function(a,b) {
    if (a>b) return -1;
    else if (b>a) return 1;
    else return 0;
  });
  return reverseSort;
}

let inputA = ["c", "b", "d"];

module.exports = { inputs: [inputA], func: sortStringArray }
