/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let s = "";
  let inital = x;

  if (x === 0) return true;

  if (inital < 0) {
    return false;
  }


  while (inital !== 0) {
    s += (inital % 10);
    inital = Math.floor(inital / 10);
  }

  if (parseInt(s) === x) {
    return true;
  } else return false;

};