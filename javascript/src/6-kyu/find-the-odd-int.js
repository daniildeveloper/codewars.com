/**
 * Given an array, find the int that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

function findOdd(A) {
  //happy coding!

  //number result
  var result = 0;

  //how many times the given number appears in the array
  var timesCount = {};

  //count how many
  for (var i in A) {
    (timesCount[A[i]] !== undefined) ? (timesCount[A[i]]++) : (timesCount[A[i]] = 1);
  }

  for (var j in timesCount) {
    if (timesCount[j] % 2 === 1) {
      result = parseInt(j);
    }
  }
  return result;
}
